
import React, { useContext, useDebugValue, useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import { Link, useHistory } from "react-router-dom"
import Navbar from "../navbar/navbar"
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import "./buildpizza.css"
import chillisauce from "../asserts/chillisauce.png"
import PizzaBase from "../asserts/PizzaBase.png"
import BaseCheese from "../asserts/BaseCheese.png"
import Basil from "../asserts/Basil.png"
import Pep from "../asserts/Pep.png"
import Mushroom from "../asserts/Mushroom.png"
import Tomato from "../asserts/Tomato.png"
import PizzaMan from "../asserts/PizzaMan.png"
import pizza1 from "../asserts/pizza1.png"

import pizzalogo from "../asserts/pizza logo.png"
import Pineapple from "../asserts/Pineapple.png"
import Olive from "../asserts/Olive.png"
import cap from "../asserts/cap.png"
import onionnew from "../asserts/onionnew.png"
import Chicken from "../asserts/Chicken.png"
import Mutton from "../asserts/Mutton.png"
import sauce from "../asserts/sauce.png"
import axios from "axios"

import { motion } from "framer-motion"



import Logincontext from "../contextarea/logincontext"

import Ingredientcontext from "../contextarea/Ingredientcontext"



export default function Buildpizza(props) {

    let userdet = useContext(Logincontext)

    let { stock, setstock, items, setItems, payment, setpayment, orderlist, setorderlist } = useContext(Ingredientcontext)




    const [pricetag, setpricetag] = useState(0);
    const [show, setShow] = useState(false);
    const [order, setorder] = useState();

    let history = useHistory()
    let sum = 0;
    let finalcost = 0;

















    let orderplace = () => {
        payment && setorderlist([...orderlist, ...items.MeatSelected, ...items.VeggSelected])
    }

    let showrazorpay = () => {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js"
            document.body.append(script)

            script.onload = () => {
                resolve(true);
            }
            script.onerror = () => {
                resolve(false)
            }
        })


    }


    let displayrazorpay = async () => {


        let idd = await axios.post("https://pizzabytes.herokuapp.com/users/razorid", { email: userdet.user.userdetails, amountpayable: pricetag })
            .then((res) => {
               
                return res.data.transactionId

            })
            .catch((error) => {
                console.log(error)
            })
     
        let result = await showrazorpay();

        if (!result) {
            alert('connection interrupted')
        }
        
        var options = {
            "key": "rzp_test_YIuQovhOdzMDxK",
            "amount": (pricetag * 100),
            "currency": "INR",
            "name": "Pizza Bytes",

            "handler": function (response) {
                alert(response.razorpay_payment_id);
                alert("your payment is completed");
                alert("order is on the way")
            },
            "prefill": {

                "email": userdet.user.userdetails,

            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#e81111"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();

        rzp1.on('payment.failed', function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
            setpayment(false);
        });


        setpayment(true);
    
    }




    function setacess() {
        if (items.MeatSelected.length === 1 || items.VeggSelected.length === 3) {
            setShow(true)
        }

    }


   

    return (


        <>





            <div className="row cont" >
            <Navbar />
                <div className="col-sm-12 col-lg-4 bgc ">




                    <div style={{ position: "relative" }} >

                        < motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                y: items.VeggSelected.find((ele) => ele.name == "Onion") ? 100 : -100,
                                opacity: items.VeggSelected.find((ele) => ele.name == "Onion") ? 1 : 0,
                            }}
                            transition={{ duration: 1 }}
                            className="ingre2 z1"
                        >
                            <img src={onionnew} alt="Pizza Base" className="imagec2 " />
                        </motion.div>



                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                y: items.VeggSelected.find((ele) => ele.name == "Capsicum") ? 100 : -100,
                                opacity: items.VeggSelected.find((ele) => ele.name == "Capsicum") ? 1 : 0,
                            }}
                            transition={{ duration: 1 }}
                            className="ingre1 z1"
                        >
                            <img src={cap} alt="Pizza Base" className="imagec1 " />
                        </motion.div>



                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                y: items.VeggSelected.find((ele) => ele.name == "Basil") ? 100 : -100,
                                opacity: items.VeggSelected.find((ele) => ele.name == "Basil") ? 1 : 0,
                            }}
                            transition={{ duration: 1 }}
                            className="ingre z1"
                        >
                            <img src={Basil} alt="Pizza Base" className="imagec " />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                y: items.VeggSelected.find((ele) => ele.name == "Mushroom") ? 100 : -100,
                                opacity: items.VeggSelected.find((ele) => ele.name == "Mushroom") ? 1 : 0,
                            }}
                            transition={{ duration: 1 }}
                            className="ingre z1"
                        >
                            <img src={Mushroom} alt="Pizza Base" className="imagec " />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                y: items.VeggSelected.find((ele) => ele.name == "Tomato") ? 100 : -100,
                                opacity: items.VeggSelected.find((ele) => ele.name == "Tomato") ? 1 : 0,
                            }}
                            transition={{ duration: 1 }}
                            className="ingre z1"
                        >
                            <img src={Tomato} alt="Pizza Base" className="imagec " />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                y: items.VeggSelected.find((ele) => ele.name == "Olive") ? 100 : -100,
                                opacity: items.VeggSelected.find((ele) => ele.name == "Olive") ? 1 : 0,
                            }}
                            transition={{ duration: 1 }}
                            className="ingre z1"
                        >
                            <img src={Olive} alt="Pizza Base" className="imagec " />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                y: items.MeatSelected.find((ele) => ele.name == "Peparoni") ? 100 : -100,
                                opacity: items.MeatSelected.find((ele) => ele.name == "Peparoni") ? 1 : 0,
                            }}
                            transition={{ duration: 1 }}
                            className="ingre z1"
                        >
                            <img src={Pep} alt="Pizza Base" className="imagec " />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                y: items.MeatSelected.find((ele) => ele.name == "Chicken") ? 100 : -100,
                                opacity: items.MeatSelected.find((ele) => ele.name == "Chicken") ? 1 : 0,
                            }}
                            transition={{ duration: 1 }}
                            className="ingre  z1 "
                        >
                            <img src={
                                Chicken
                            } alt="Pizza Base" className="imagec" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                y: items.MeatSelected.find((ele) => ele.name == "Mutton") ? 100 : -100,
                                opacity: items.MeatSelected.find((ele) => ele.name == "Mutton") ? 1 : 0,
                            }}
                            transition={{ duration: 1 }}
                            className="ingre  z1"
                        >
                            <img src={Mutton} alt="Pizza Base" className="imagec " />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                y: items.CheeseSelected ? 100 : -100,
                                opacity: items.CheeseSelected ? 1 : 0,
                            }}
                            transition={{ duration: 1 }}
                            className="ingre  zhigh1"
                        >
                            <img src={BaseCheese} alt="Pizza Base" className="imagec" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                y: items.SauceSelected ? 100 : -100,
                                opacity: items.SauceSelected ? 1 : 0,
                            }}
                            transition={{ duration: 1 }}
                            className="ingre  zhigh"
                        >
                            <img src={PizzaBase} alt="Pizza Base" className="imagec" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                y: items.BaseSelected ? 100 : -100,
                                opacity: items.BaseSelected ? 1 : 0,
                            }}
                            className="base"
                            transition={{ duration: 1 }}

                        >
                            <img src={pizza1} alt="base_matrial" className="imagec" />

                        </motion.div>

                        <img src={PizzaBase} alt="base_matrial" className="imagec gridobj" />
                    </div>





                </div>






                <div className="col-sm-12 col-lg-8 bgg containerbuild">

                    <h1>Build your pizza</h1>



                    <Alert show={show} variant="info">
                        <Alert.Heading>

                            You can only select one meat and three vegtables.
                            You will be charged extra amount if you choose extra.
                            </Alert.Heading>

                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                                Accept
                          </Button>
                        </div>
                    </Alert>
                    <div className="row">
                        <div className="col-4 bodering"  >
                            <h4>Base</h4>

                            <input type="radio" id="Hand toasted" name="baseselector" onChange={(e) => {


                          
                                if (e.target.checked) {


                                    setItems({ ...items, BaseSelected: e.target.id })


                                }
                                else if (e.target.checked === false) {
                             
                                    setItems({
                                        ...items, BaseSelected: ""
                                    })

                                }

                            }} autocomplete="off" />
                            <label className="space" for="baseselector">Hand toasted</label>
                            <br />

                            <input type="radio" id="Wheat crust" onChange={(e) => {

                                if (e.target.checked) {


                                    setItems({ ...items, BaseSelected: e.target.id })


                                }
                                else if (e.target.checked === false) {
                                  
                                    setItems({
                                        ...items, BaseSelected: ""
                                    })

                                }

                            }} name="baseselector" autocomplete="off" />
                            <label className="space" for="baseselector">Wheat crust</label>
                            <br />

                            <input type="radio" className="space" id="Fresh pan" onChange={(e) => {

                                if (e.target.checked) {


                                    setItems({ ...items, BaseSelected: e.target.id })


                                }
                                else if (e.target.checked === false) {
                             
                                    setItems({
                                        ...items, BaseSelected: ""
                                    })

                                }

                            }} name="baseselector" autocomplete="off" />
                            <label className="space" for="baseselector">Fresh pan</label>
                            <br />



                            <input type="radio" id="Deep dish" onChange={(e) => {

                            
                                if (e.target.checked) {


                                    setItems({ ...items, BaseSelected: e.target.id })


                                }
                                else if (e.target.checked === false) {
                                   
                                    setItems({
                                        ...items, BaseSelected: ""
                                    })

                                }

                            }} name="baseselector" autocomplete="off" />
                            <label className="space" for="baseselector">Deep dish</label>
                            <br />



                            <input type="radio" id="Cheese burst" onChange={(e) => {

                                if (e.target.checked) {


                                    setItems({ ...items, BaseSelected: e.target.id })


                                }
                                else if (e.target.checked === false) {
                             
                                    setItems({
                                        ...items, BaseSelected: ""
                                    })

                                }

                            }} name="baseselector" autocomplete="off" />
                            <label className="space" for="baseselector">Cheese burst</label>

                        </div>










                        <div className="col-4" >
                            <h4>Sauce</h4>


                            <input type="radio" id="Tomato Sauce" name="sauseSelector" onChange={(e) => {

                 
                                if (e.target.checked) {


                                    setItems({ ...items, SauceSelected: e.target.id })


                                }
                                else if (e.target.checked === false) {
                          
                                    setItems({
                                        ...items, SauceSelected: ""
                                    })

                                }

                            }} autocomplete="off" />
                            <label className="space" for="sauseSelector">Tomato Sauce</label>
                            <br />

                            <input type="radio" id="Pasta Sauce" onChange={(e) => {

                            
                                if (e.target.checked) {


                                    setItems({ ...items, SauceSelected: e.target.id })


                                }
                                else if (e.target.checked === false) {
                            
                                    setItems({
                                        ...items, SauceSelected: ""
                                    })

                                }

                            }} name="sauseSelector" autocomplete="off" />
                            <label className="space" for="sauseSelector">Pasta Sauce</label>
                            <br />

                            <input type="radio" className="space" id="Spaghetti Sauce" onChange={(e) => {

                       
                                if (e.target.checked) {


                                    setItems({ ...items, SauceSelected: e.target.id })


                                }
                                else if (e.target.checked === false) {
                     
                                    setItems({
                                        ...items, SauceSelected: ""
                                    })

                                }

                            }} name="sauseSelector" autocomplete="off" />
                            <label className="space" for="sauseSelector">Spaghetti Sauce</label>
                            <br />



                            <input type="radio" id="Barbecue Sauce" onChange={(e) => {

                                if (e.target.checked) {


                                    setItems({ ...items, SauceSelected: e.target.id })


                                }
                                else if (e.target.checked === false) {
                        
                                    setItems({
                                        ...items, SauceSelected: ""
                                    })

                                }

                            }} name="sauseSelector" autocomplete="off" />
                            <label className="space" for="sauseSelector">Barbecue Sauce</label>
                            <br />



                            <input type="radio" id="Sweet Chilli Sauce" onChange={(e) => {

                       
                                if (e.target.checked) {


                                    setItems({ ...items, SauceSelected: e.target.id })


                                }
                                else if (e.target.checked === false) {
                              
                                    setItems({
                                        ...items, SauceSelected: ""
                                    })

                                }

                            }} name="sauseSelector" autocomplete="off" />
                            <label className="space" for="sauseSelector">Sweet Chilli Sauce</label>

                        </div>










                        <div className="col-4" >

                            <h4>Cheese</h4>

                            <input type="radio" id="Double Cheese" name="CheeseSelector" onChange={(e) => {

                         
                                if (e.target.checked) {


                                    setItems({ ...items, CheeseSelected: e.target.id })


                                }
                                else if (e.target.checked === false) {
                             
                                    setItems({
                                        ...items, CheeseSelected: ""
                                    })

                                }

                            }} autocomplete="off" />
                            <label className="space" for="CheeseSelector">Double Cheese</label>
                            <br />

                            <input type="radio" id="Mexican Cheese" onChange={(e) => {

                                if (e.target.checked) {


                                    setItems({ ...items, CheeseSelected: e.target.id })


                                }
                                else if (e.target.checked === false) {
                                 
                                    setItems({
                                        ...items, CheeseSelected: ""
                                    })

                                }

                            }} name="CheeseSelector" autocomplete="off" />
                            <label className="space" for="CheeseSelector">Mexican Cheese</label>
                            <br />

                            <input type="radio" className="space" id="Mozzerrila Cheese" onChange={(e) => {

                                if (e.target.checked) {


                                    setItems({ ...items, CheeseSelected: e.target.id })


                                }
                                else if (e.target.checked === false) {
                                
                                    setItems({
                                        ...items, CheeseSelected: ""
                                    })

                                }

                            }} name="CheeseSelector" autocomplete="off" />
                            <label className="space" for="CheeseSelector">Mozzerrila Cheese</label>
                            <br />



                            <input type="radio" id="Goat Cheese" onChange={(e) => {

                            
                                if (e.target.checked) {


                                    setItems({ ...items, CheeseSelected: e.target.id })


                                }
                                else if (e.target.checked === false) {
                                
                                    setItems({
                                        ...items, CheeseSelected: ""
                                    })

                                }

                            }} name="CheeseSelector" autocomplete="off" />
                            <label className="space" for="CheeseSelector">Goat Cheese</label>
                            <br />



                        </div>





                        <div className="col-6" >
                            <h3>Vegetables</h3>


                            <div className="form-check">

                                <input className="form-check-input" onChange={(e) => {

                                 
                                    if (e.target.checked) {
                                       
                                        let termv = items.itemsSelected.filter((dat) => {
                                            if (dat.name === e.target.id) {
                                                return dat
                                            }
                                        })
                                     
                                        setItems({ ...items, VeggSelected: [...items.VeggSelected, termv[0]] })
                                        setacess()




                                    }
                                    else if (e.target.checked === false) {


                                        let untermv = items.itemsSelected.filter((dat) => {
                                            if (dat.name === e.target.id) {
                                                return dat
                                            }
                                        })
                                     


                                        setItems({
                                            ...items, VeggSelected: items.VeggSelected.filter(ele => ele.name !== untermv[0].name)
                                        })

                                    }



                                }} type="checkbox" name="Veg" id="Tomato" />
                                <label className="form-check-label" for="Veg">
                                    Tomato
                         </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" onChange={(e) => {


                                    if (e.target.checked) {
                                        let termv = items.itemsSelected.filter((dat) => {
                                            if (dat.name === e.target.id) {
                                                return dat
                                            }
                                        })
                               
                                        setItems({ ...items, VeggSelected: [...items.VeggSelected, termv[0]] })
                                        setacess()




                                    }
                                    else if (e.target.checked === false) {


                                        let untermv = items.itemsSelected.filter((dat) => {
                                            if (dat.name === e.target.id) {
                                                return dat
                                            }
                                        })




                                        setItems({
                                            ...items, VeggSelected: items.VeggSelected.filter(ele => ele.name !== untermv[0].name)
                                        })


                                    }


                                }} name="Veg" value="" id="Capsicum" />
                                <label className="form-check-label" for="Veg">
                                    Capsicum
                         </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" name="Veg" onChange={(e) => {


                                    if (e.target.checked) {
                                    
                                        let termv = items.itemsSelected.filter((dat) => {
                                            if (dat.name === e.target.id) {
                                                return dat
                                            }
                                        })
                                        setItems({ ...items, VeggSelected: [...items.VeggSelected, termv[0]] })

                                        setacess()



                                    }
                                    else if (e.target.checked === false) {


                                       
                                        let untermv = items.itemsSelected.filter((dat) => {
                                            if (dat.name === e.target.id) {
                                                return dat
                                            }
                                        })
                                   




                                        setItems({
                                            ...items, VeggSelected: items.VeggSelected.filter(ele => ele.name !== untermv[0].name)
                                        })


                                    }



                                }} type="checkbox" value="" id="Olive" />
                                <label className="form-check-label" for="Veg">
                                    Olive
                         </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" name="Veg" onChange={(e) => {

                                    if (e.target.checked) {
                                   
                                        let termv = items.itemsSelected.filter((dat) => {
                                            if (dat.name === e.target.id) {
                                                return dat
                                            }
                                        })
                                
                                        setItems({ ...items, VeggSelected: [...items.VeggSelected, termv[0]] })

                                        setacess()



                                    }
                                    else if (e.target.checked === false) {


                                     
                                        let untermv = items.itemsSelected.filter((dat) => {
                                            if (dat.name === e.target.id) {
                                                return dat
                                            }
                                        })
                                  




                                        setItems({
                                            ...items, VeggSelected: items.VeggSelected.filter(ele => ele.name !== untermv[0].name)
                                        })


                                    }


                                }} type="checkbox" value="" id="Onion" />
                                <label className="form-check-label" for="Veg">
                                    Onion
                         </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" name="Veg" onChange={(e) => {

                                

                                    if (e.target.checked) {
                                  
                                        let termv = items.itemsSelected.filter((dat) => {
                                            if (dat.name === e.target.id) {
                                                return dat
                                            }
                                        })
                                   
                                        setItems({ ...items, VeggSelected: [...items.VeggSelected, termv[0]] })

                                        setacess()



                                    }
                                    else if (e.target.checked === false) {


                                     
                                        let untermv = items.itemsSelected.filter((dat) => {
                                            if (dat.name === e.target.id) {
                                                return dat
                                            }
                                        })
                          



                                        setItems({
                                            ...items, VeggSelected: items.VeggSelected.filter(ele => ele.name !== untermv[0].name)
                                        })


                                    }


                                }} type="checkbox" value="" id="Mushroom" />
                                <label className="form-check-label" for="Veg">
                                    Mushroom
                         </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" name="Veg" onChange={(e) => {

                                
                                    if (e.target.checked) {
                                      
                                        let termv = items.itemsSelected.filter((dat) => {
                                            if (dat.name === e.target.id) {
                                                return dat
                                            }
                                        })
                                  
                                        setItems({ ...items, VeggSelected: [...items.VeggSelected, termv[0]] })

                                        setacess()



                                    }
                                    else if (e.target.checked === false) {


                                    
                                        let untermv = items.itemsSelected.filter((dat) => {
                                            if (dat.name === e.target.id) {
                                                return dat
                                            }
                                        })
                                 




                                        setItems({
                                            ...items, VeggSelected: items.VeggSelected.filter(ele => ele.name !== untermv[0].name)
                                        })


                                    }


                                }} type="checkbox" value="" id="Basil" />
                                <label className="form-check-label" for="Veg">
                                    Basil
                         </label>
                            </div>
                        </div>






                        <div className="col-6 " >
                            <h4> Meat</h4>

                            <div className="form-check">

                                <input className="form-check-input" onChange={(e) => {

                               
                                    if (e.target.checked) {
                                      
                                        let term = items.itemsSelected.filter((dat) => {
                                            if (dat.name === e.target.id) {
                                                return dat
                                            }
                                        })
                                  

                                        setItems({ ...items, MeatSelected: [...items.MeatSelected, term[0]] });

                                        setacess()



                                    }
                                    else if (e.target.checked === false) {


                                   
                                        let unterm = items.itemsSelected.filter((dat) => {
                                            if (dat.name === e.target.id) {
                                                return dat
                                            }
                                        })
                        
                                        setItems({ ...items, MeatSelected: items.MeatSelected.filter(ele => ele.name !== unterm[0].name) })


                                    }

                                }} type="checkbox" name="Nov-Veg" id="Chicken" />
                                <label className="form-check-label" for="Non-Veg">
                                    Chicken
                         </label>
                            </div>

                            <div className="form-check">

                                <input className="form-check-input" onChange={(e) => {

                                 
                                    if (e.target.checked) {
                                 
                                        let term = items.itemsSelected.filter((dat) => {
                                            if (dat.name === e.target.id) {
                                                return dat
                                            }
                                        })
                          

                                        setItems({ ...items, MeatSelected: [...items.MeatSelected, term[0]] });

                                        setacess()



                                    }
                                    else if (e.target.checked === false) {


                                     
                                        let unterm = items.itemsSelected.filter((dat) => {
                                            if (dat.name === e.target.id) {
                                                return dat
                                            }
                                        })
                                     

                                        setItems({ ...items, MeatSelected: items.MeatSelected.filter(ele => ele.name !== unterm[0].name) })


                                    }

                                }} type="checkbox" name="Nov-Veg" id="Mutton" />
                                <label className="form-check-label" for="Non-Veg">
                                    Mutton
                              </label>

                            </div>

                            <div className="form-check">
                                <input className="form-check-input" onChange={(e) => {

                                 
                                    if (e.target.checked) {
                                
                                        let term = items.itemsSelected.filter((dat) => {
                                            if (dat.name === e.target.id) {
                                                return dat
                                            }
                                        })
                              

                                        setItems({ ...items, MeatSelected: [...items.MeatSelected, term[0]] });

                                        setacess()



                                    }
                                    else if (e.target.checked === false) {


                                
                                        let unterm = items.itemsSelected.filter((dat) => {
                                            if (dat.name === e.target.id) {
                                                return dat
                                            }
                                        })
                               

                                        setItems({ ...items, MeatSelected: items.MeatSelected.filter(ele => ele.name !== unterm[0].name) })



                                    }


                                }} type="checkbox" name="Nov-Veg" id="Peparoni" />
                                <label className="form-check-label" for="Non-Veg">
                                    Peparoni
                               </label>

                            </div>
                        </div>
                    </div >























                    <div style={{ float: 'right' }} className="row">
                        <h4>your order details</h4>
                        <ul className="list-group">


                            <li className="list-group-item lis list-group-item d-flex justify-content-between align-items-center">
                                <p>pizza</p>
                                <h6> <span className="badge badge-primary badge-pill">280</span></h6>
                            </li>

                            {


                                items.MeatSelected ?


                                    items.MeatSelected.map((meat, index) => {

                                        if (index > 0) {
                                            return <li className="list-group-item lis d-flex justify-content-between align-items-center">
                                                <p> {meat.name}</p>

                                                <h6>


                                                    <span className="badge badge-primary badge-pill">{meat.price}</span>
                                                </h6>

                                            </li>
                                        }

                                    })
                                    :
                                    <div> ...</div>




                            }
                            {
                                items.VeggSelected ?

                                    items.VeggSelected.map((vegg, index) => {

                                        if (index > 2) {

                                            return <li className="list-group-item lis d-flex justify-content-between align-items-center">
                                                <p> {vegg.name}</p>

                                                <h6>


                                                    <span className="badge badge-primary badge-pill">{vegg.price}</span>
                                                </h6>

                                            </li>
                                        }

                                    })

                                    :
                                    <div>...meat waiting</div>
                            }
                            {

                                items.MeatSelected ?

                                    items.MeatSelected.map((ele, index) => {


                                        if (index >= 1) {

                                            sum += ele.price
                          
                                        }
                                   


                                    })
                                    :
                                    <div>....</div>


                            }
                            {
                                items.VeggSelected ?

                                    items.VeggSelected.map((ele, index) => {


                                        if (index >= 3) {

                                            sum += ele.price
                                        
                                        }
                                     


                                    })
                                    :
                                    <div>vegwaitng</div>


                            }


                            <li className="list-group-item list-group-item d-flex justify-content-between lis align-items-center">
                                <p>Extra cost</p>
                                <h6>  <span className="badge badge-primary badge-pill">{sum}</span>   </h6>
                            </li>


                            <li className="list-group-item list-group-item-warning d-flex justify-content-between lis align-items-center">
                                <p>Total cost</p>
                                <h6>  <span className="badge badge-primary badge-pill">{
                                    finalcost = sum + items.totalCost

                                }</span>   </h6>
                            </li>
                        </ul>


                        <div className="space1">
                            <button className=" btn btn-primary right"
                                onClick={() => {

                                    setpricetag(finalcost)
                                    orderplace();
                       

                                    // history.push("/checkout")
                                }
                                }

                            >
                                Proceed to Checkout
                           </button>

                            <button className="btn btn-primary" id="payment" onClick={displayrazorpay}>
                                Payment
                                    </button>

                        </div>



                    </div>



                </div>
            </div>



            {/* </div> */}

        </>
    )
}