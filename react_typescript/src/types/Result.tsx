export type Name={
    title:string,
    first:string,
    last:string
}
export type Street={
    number:number,
    name:string
}

export type Coordinates={
    latitude:string,
    longitude:string
}

export type TimeZone={
    offset:string,
    description:string
}

export type Location={
    street:Street,
    city:string,
    state:string,
    country:string,
    postcode:string,
    coordinates:Coordinates,
    timezone:TimeZone
}

export type Login={
    uuid:string,
    username:string,
    password:string,
    salt:string,
    md5:string,
    sha1:string,
    sha256:string
}

export type DateAge={
    date:string,
    age:number
}

export type Id={
    name:string,
    value:string
}

export type Picture={
    large:string,
    medium:string,
    thumbnail:string
}

export type Result= {
    gender:string,
    name:Name,
    location:Location,
    email:string,
    login:Login,
    dob:DateAge,
    registered:DateAge,
    phone:string,
    cell:string,
    id:Id,
    picture:Picture,
    nat:string
}
