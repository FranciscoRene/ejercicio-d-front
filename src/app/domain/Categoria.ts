export class Categoria {
    private id: Number;
    private nombre: String;
    private icono: String;
    private iconoSeleccionado: String;
    private iconoMostrado: String;

	constructor(categoria: any) {
		this.id = categoria.id;
        this.nombre = categoria.nombre;
        this.icono = categoria.icono;
        this.iconoSeleccionado = categoria.iconoSeleccionado;
        this.iconoMostrado = categoria.iconoMostrado;
	}

    public getId(): Number {
        return this.id;
    }

    public setId(id: Number): void {
        this.id = id;
    }

    public getNombre(): String {
        return this.nombre;
    }

    public setNombre(nombre: String): void {
        this.nombre = nombre;
    }

    public getIcono(): String {
        return this.icono;
    }

    public setIcono(icono: String): void {
        this.icono = icono;
    }

    public getIconoSeleccionado(): String {
        return this.iconoSeleccionado;
    }

    public setIconoSeleccionado(iconoSeleccionado: String): void {
        this.iconoSeleccionado = iconoSeleccionado;
    }
    public getIconoMostrado(): String {
        return this.iconoMostrado;
    }

    public setIconoMostrado(iconoMostrado: String): void {
        this.iconoMostrado = iconoMostrado;
    }
    
}