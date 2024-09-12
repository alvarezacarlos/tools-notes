classes
  attributes
  constructor
  methods
  getters
  setters
  public
  private
  readonly
  static

inheritance (we can only inherit from one class)
  extends
  super
  protected (props /methods are not accessible outside the class but accessible by clases that extends the base class)
  override base/parent class method. Creamos el metodo en la clase hija y le damos una nueva implementacion
  Absctract clases
    Las clases abstractas en TypeScript permiten definir estructuras de clases base que no pueden ser instanciadas directamente y que pueden contener métodos abstractos que deben ser implementados por las clases derivadas. Esto proporciona un mecanismo sólido para la implementación de herencia y polimorfismo en aplicaciones TypeScript.
  private constructor / singleton
    it only allows one istance of a certain class.
    Un singleton es un patrón de diseño de software que asegura que una clase tenga una única instancia y proporciona un punto de acceso global a esta instancia. Este patrón se utiliza cuando queremos limitar la creación de objetos de una clase a una sola instancia, asegurando que no haya más de una instancia de esa clase en el sistema y proporcionando un punto de acceso global para esa instancia.

    Características Clave del Singleton:
      Constructor Privado: La clase Singleton tiene un constructor privado para evitar que otras clases instancien directamente esta clase.
      Instancia Única: La propia clase Singleton contiene una instancia estática de sí misma.
      Método Estático de Acceso: Proporciona un método estático que devuelve la única instancia de la clase. Este método crea la instancia si aún no existe o simplemente devuelve la instancia existente.


interfaces  
  



