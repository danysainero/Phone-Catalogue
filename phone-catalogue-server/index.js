const express = require('express');
const cors = require('cors');
const phones = require('./src/data/phone-list.json');
const app = express();



app.use(cors());
app.use(express.json());

const items = [{
    id: 1,
    name: "pepe",
    phoneNumber: "656444444"
},
{
    id: 2,
    name: "maria",
    phoneNumber: "22222222"
}
]

//Methods
//GET
app.get('/items', (req, res)=>{
    const allItems = [...phones.values()];
    console.log(allItems);
    
    res.json(allItems);
});

app.get('/items/:id', (req, res)=>{
    const phoneId= req.params.id;
    const allItems = [...phones.values()];
    const filteredPhone = allItems.filter((item) => {
        return item.id == phoneId;
    });
    console.log(filteredPhone);
    
    if(!filteredPhone) {
        res.sendStatus(400);
    } else {
        res.json(filteredPhone);
    }
});


app.listen(3002, () => {
    console.log('example listening ports 3002')
});