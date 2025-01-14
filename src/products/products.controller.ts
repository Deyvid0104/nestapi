import { Controller, Delete, Get, Post, Put } from '@nestjs/common';



@Controller('products')
export class ProductsController {
    @Get()
    findProducts():string{
        return "Total de productos en el aula 2ASIR"
    }
    @Get('camiseta')
    findDetalle():string{
        return "Total de camisetas!!"; 
    }
    @Get('camiseta/roja')
    findAdios():string{
        return "Total de camisetas rojas!!"; 
    }    
    @Post()
    insertaProducts():string{
        return "Producto insertado"
    }
    @Put()
    actualizaProducts():string{
        return "Producto ACTUALIZADO"
    }

    @Delete()
    borraProducts():string{
        return "Producto Borrado"
    }

}