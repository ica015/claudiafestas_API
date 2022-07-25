import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../database"

export interface ProductAttributes{
    id: number
    name: string
    imageUrl: string
    featured: boolean
    description: Text
    active:boolean
}

export interface ProductCreationAttributes extends Optional<ProductAttributes, 'imageUrl'>{}

export interface ProductInstance extends Model<ProductAttributes, ProductCreationAttributes>, ProductAttributes{}

export const Product = database.define<ProductInstance, ProductAttributes>('products', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl:{
        type:DataTypes.STRING
    },
    featured:{
        type:DataTypes.BOOLEAN,
        defaultValue: false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull:false
    },
    active:{
        type:DataTypes.BOOLEAN,
        defaultValue: true
    }
})