import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsBoolean, IsOptional, IsString, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@ObjectType()
@Entity()
export class Restaurant{

    @Field(type=>Int)
    @PrimaryGeneratedColumn()
    id: number

    @Field(type=>String)
    @Column()
    @IsString()
    @Length(5)  //5글자 이상
    name:string;

    @Field(type=>Boolean, {defaultValue:true})
    @Column({default:true})
    @IsOptional()
    @IsBoolean()
    isVegan: boolean;

    @Field(type=>String)
    @Column()
    address:string;

    @Field(type=>String)
    @Column()
    @IsString()
    ownerName: string;

    @Field(type=>String)
    @Column()
    @IsString()
    categoryName: string;
}
