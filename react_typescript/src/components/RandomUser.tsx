import { useState,useEffect } from "react";

type Name={
    title:string,
    first:string,
    last:string
}
type Street={
    number:number,
    name:string
}

type Coordinates={
    latitude:string,
    longitude:string
}

type TimeZone={
    offset:string,
    description:string
}

type Location={
    street:Street,
    city:string,
    state:string,
    country:string,
    postcode:string,
    coordinates:Coordinates,
    timezone:TimeZone
}

type Login={
    uuid:string,
    username:string,
    password:string,
    salt:string,
    md5:string,
    sha1:string,
    sha256:string
}




function RandomUser() {
  return (
    <div>RandomUser</div>
  )  
}

export default RandomUser