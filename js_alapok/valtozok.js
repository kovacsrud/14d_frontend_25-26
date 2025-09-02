  //document.write("Javascript alapok");
        //Változók

        //Konstans, később nem tudjuk megváltoztatni
        const a="Valami";

        //Globális változó a teljes scriptben elérhető
        var b=778;

        //Lokális változó, csak abban a kódblokkban elérhető ahol deklarálták
        let c="Bármi";

        if(true){
            let d=789;
            //document.write(d);
        }

        //Hozzáférés a root-hoz
        let root=document.getElementById('root');
        let p=document.createElement('p');
        p.textContent=c;
        root.appendChild(p);