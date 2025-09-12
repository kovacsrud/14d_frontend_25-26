
function App(){
    return (
        React.createElement('div',{
            style:{
                backgroundColor:"black"
            }

        },
        React.createElement(Box,{hatterszin:"green",felirat:"Box1",kezdo:5}),
        React.createElement(Box,{hatterszin:"red",felirat:"Box2",kezdo:10}),
        React.createElement(Box,{hatterszin:"yellow",felirat:"Box3",kezdo:16}),
        React.createElement(Box,{hatterszin:"blue",felirat:"Box4",kezdo:22})
        )
    )

}


function Box({hatterszin,felirat,kezdo}){

    const[szamlalo,setSzamlalo]=React.useState(kezdo);

    return (
        React.createElement('div',{
            style:{
                width:"200px",
                height:"200px",
                backgroundColor:hatterszin
            },
            className:"p-2 m-5 rounded",
            onClick:()=>setSzamlalo(prev=>prev+1)
        },felirat," ",szamlalo,React.createElement(Reset,{setSzamlalo:setSzamlalo}))
    )
}

function Reset({setSzamlalo}){
    return (
        React.createElement('button',{
            className:"btn btn-primary m-2",
            onClick:(e)=>{setSzamlalo(0);e.stopPropagation()}
        },"Reset")
    )
}


ReactDOM.render(React.createElement(App),document.getElementById('root'));