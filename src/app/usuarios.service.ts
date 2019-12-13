export class UsuarioService {

    getUsuarios(){
        return [
            {
                "nombre": "Luis",
                 "edad": 20,
                 "hobby": 'cantar'
            },
            {
                "nombre": "Derlys",
                "edad": 30,
                "hobby": 'pintar'
            },
            {
                "nombre": "Bram",
                "edad": 40,
                "hobby": 'escribir'
            }

        ];
    }
}