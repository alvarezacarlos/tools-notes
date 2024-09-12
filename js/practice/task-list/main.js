let mealsState = []
let ordersState = []
let ruta = 'login' 

const renderItems = (items) => {
    const mealsList = document.getElementById('meals-list');

    mealsList.removeChild(mealsList.firstElementChild)
    
    items.forEach(item => mealsList.insertAdjacentElement('beforeend', item))
}


const renderOrders = (items) => {
    const ordersList= document.getElementById('orders-list');

    ordersList.innerHTML = ''
    items.forEach(item => {
       
        ordersList.insertAdjacentElement('beforeend', item)

    })
}

const parseFromString = (s) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(s, 'text/html')

    return doc.body.firstChild
}

const createMealsLIItem = (item) => {
    const elem = parseFromString(`<li data-id="${item._id}">${item.name}</li>`)
    elem.addEventListener('click', () => {
        const mealsList = document.getElementById('meals-list')
        const items = Array.from(mealsList.children) 
        for (const item of items){
            item.classList.remove('selected')
        }
        elem.classList.add('selected')
        const clickedMealId =  document.getElementById('clickedMealId')
        clickedMealId.value = item._id
    })
    return elem
}

const createOrdersLIItem = (order) => {
    
    const meal = mealsState.find(meal => meal._id === order.meal_id)
    
    const  elem  = parseFromString(`<li data-id="${order._id}">${meal.name} - ${localStorage.getItem('user')}</li>`)

    return elem
}



const createOrderObeject = () => {
    const clickedMealIdHost = document.getElementById('clickedMealId')
    const clickedMealId = clickedMealIdHost.value;
    
    if (!clickedMealId){          
        alert('You need to select a Meal!')

        const bttn = document.getElementById('submit')
        bttn.setAttribute('disabled', false)

        return
    }
    console.log(clickedMealId)
    return order = { 
        meal_id: clickedMealId,
    }
}

const createOrder = () => {
    fetch('https://serverless-alvarez-carlos.vercel.app/api/orders', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json', 
            authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(createOrderObeject()) 
    })
    .then( res => {
        fetchOrders()
    })
}

const initOrdersView = () => {
    fetch('https://serverless-alvarez-carlos.vercel.app/api/meals')

    .then(response => response.json())
    
    .then(data => {

        mealsState = data;

        const items = data.map(createMealsLIItem)
       
        renderItems(items)

        fetchOrders()
    })
}

const fetchOrders = () => {
    fetch('https://serverless-alvarez-carlos.vercel.app/api/orders')
    .then(response => response.json())
    .then(orderData => {

        ordersState = orderData

        console.log(orderData)

        const items = orderData.map(order => createOrdersLIItem(order))

        renderOrders(items)
        const bttn = document.getElementById('submit')
        bttn.removeAttribute('disabled')

    })

}

const initForm = () => {
    const form = document.getElementById('order')

    form.onsubmit = (e) => {
        e.preventDefault()

        const bttn = document.getElementById('submit')
        bttn.setAttribute('disabled', true)

        createOrder(createOrderObeject())
    }

}

const createUser = () => {
    fetch('https://serverless-alvarez-carlos.vercel.app/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: 'Carlos@gmail.com', password: '123456'})
    })
}

const gatherUserInput = () => {
    const loginForm = document.getElementById('login-form')
    const email = loginForm.querySelector('#email')
    const password = loginForm.querySelector('#password')

    const user = {
        email: email.value,
        password: password.value
    }

    console.log(user)
    return user;
}

const login = () => {
    fetch('https://serverless-alvarez-carlos.vercel.app/api/auth/login', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(gatherUserInput()) 
    })
        .then(res => res.json()) 
        .then(res => {
            // console.log(res)
            localStorage.setItem('user', res.userName)
            localStorage.setItem('token', res.token) 
            ruta =  'orders'
            rendirect()
        })
}

const initLogInFormView = () => {
    const logInForm = document.getElementById('login-form')
    logInForm.onsubmit = e => {
        e.preventDefault()
        login()
    }
}


const renderLogInForm = () => {
    const src = document.getElementById('login-temp')
    const host = document.getElementById('app')
    const srcNode = document.importNode(src.content, true)
    const elem = srcNode.firstElementChild
    host.removeChild(host.firstElementChild)
    host.insertAdjacentElement('beforeend', elem)
}

const renderOrdersView = () => {
    const src = document.getElementById('order-temp')
    const host = document.getElementById('app')
    const srcNode = document.importNode(src.content, true)
    const elem = srcNode.firstElementChild
    host.removeChild(host.firstElementChild)
    host.insertAdjacentElement('beforeend', elem)
}

const rendirect = () => {
    if (ruta === 'login'){
        renderLogInForm()
        initLogInFormView()
    }
    else if (ruta === 'orders'){
        
        renderOrdersView()
        initOrdersView()
        initForm()
    }
}


const checkForToken = () => {
    const token = localStorage.getItem('token')
    if (token){
        return true;
    }
    else {
        return false
    }
}



window.onload = () => {

    const userAuthenticated = checkForToken()

    if (userAuthenticated) {
        renderOrdersView()
        initOrdersView()
        initForm()
    }
    else{
        rendirect()
    }   

}
