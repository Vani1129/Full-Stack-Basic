import express from 'express';


const app = express();
app.use(express.static('dist'));

// app.get('/', (req,res) => {
//     res.send('Server is ready');
// });

// list of jokes

app.get('/api/jokes', (req,res)=>{
    const jokes =[
        {
            id:"1",
            title:"First Joke",
            content:"Why was the math book sad?",
        },
        {
            id:"2",
            title:"Another Joke",
            content:"Why ???",
        },
        {
            id:"3",
            title:"Third Joke",
            content:"Why was the  book sad?",
        }
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    });
