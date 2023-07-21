import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { log } from "console";


export default function ProductCard(data: any) {

  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(event.target.value);

    setQuantity(inputValue);
  };

  const handleAddToCart = () => {

      const existingCartData = localStorage.getItem("cartData");
      const cartData = existingCartData ? JSON.parse(existingCartData) : {};
      const productId = data.data.id;

      if(quantity === 0){
        return;
      }
  
      if (cartData[productId]) {
        cartData[productId].quantity += quantity;
      } else {
        cartData[productId] = {
          name: data.data.Name,
          price: data.data.Price,
          quantity: quantity,
        };
      }
      localStorage.setItem("cartData", JSON.stringify(cartData));
  };



  return (
    <>
      <Card className="w-[400px] h-[auto] m-4 shadow-md my-20">
        <CardHeader>
          <CardTitle className="mb-2">{data.data.Name}</CardTitle>
          <div className="flex gap-6">
            <CardDescription>{data.data.category.name}</CardDescription>
            <CardDescription>{data.data.ProductType}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="w-full flex justify-center my-6">
            <Image
              // src={`/assets/drinks.webp`}
              src={`/uploads/images/${data.data.picture}`}
              width={200}
              height={200}
              alt={`${data.data.Name} product picture`}
              className="object-fill w-[200px] h-[150px]"
              // style={{ objectFit: "cover" }}
            ></Image>
          </div>
          <p>
            <span className="font-bold">Description:</span>
            <br />
            {data.data.Description}
          </p>

          <div className="flex flex-col space-y-1.5 my-6">
            <div>
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                disabled={!data.data.Available}
                name="quantity"
                type="number"
                min={1}
                max={data.data.Stock}
                placeholder="your desired quantity"
                value={quantity}
                onChange={handleQuantity}
              />
            </div>
            <div className="max-w-40">
              {data.data.Available == true ? (
                <Badge>available</Badge>
              ) : (
                <Badge variant="outline">Not available</Badge>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="w-full flex items-center justify-around">
          <h4 className="font-semibold text-2xl my-4">{data.data.Price}€</h4>

          <Button 
            onClick={handleAddToCart} 
            disabled={!data.data.Available}
            >
            {data.data.Available == true ? <p>Add to cart</p> : <p>Sold out</p>}
          </Button>

        </CardFooter>
      </Card>
    </>
  );
}
