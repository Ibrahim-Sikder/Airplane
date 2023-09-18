"use client";


import React, { useState, useRef, useEffect } from "react";
import style from "./Invoices.module.css";
import dynamic from "next/dynamic";
import {
  CloudUpload,
  KeyboardArrowDown,
  DeleteSweep,
  Search,
  CalendarMonth
} from "@mui/icons-material";
import { Calendar } from "react-date-range";
import format from "date-fns/format";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useReactToPrint } from 'react-to-print';
import Link from "next/link";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Invoices = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showProductType, setShowProductType] = useState(false);
  const [product, setProduct] = useState(false);
  const { register,reset, formState: { errors }, handleSubmit  } = useForm();
  const [open, setOpen] = useState(false);
  const [calendar, setCalendar] = useState("");
  const refOne = useRef(null);
  const handleShowSearchBar = () => {
    setShowSearchBar(() => !showSearchBar);
  };
  const handleProductTypeShow = () => {
    setShowProductType(() => !showProductType);
  };
  const handleShowProduct = () => {
    setProduct(() => !product);
  };

  // invoice download 
  


// daypicker

  useEffect(() => {
    setCalendar(format(new Date(), "MM/dd/yyyy"));
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const handleSelect = (date) => {
    setCalendar(format(date, "MM/dd/yyyy"));
  };

  // dynamic product add and remove 

  const [inputList, setinputList] = useState([
    { ProductType: "", Product: "", Description: "", total: "" },
  ]);


  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setinputList(list);
  };

  const handleremove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  };

  const handleaddclick = () => {
    setinputList([...inputList,   { ProductType: "", Product: "", Description: "", total: "" }]);
  };

// print pdf 
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'emp-data',
    onAfterPrint: ()=> alert('Print success')
  });


  const handleSignUp = data =>{
    const productData = {
      trip: data.trip,
      date: data.date,
      name: data.name,
      description: data.description,
      file: data.file,
      product: data.productName,
      productType : data.productType,
      total: data.total,

    }
    fetch('http://localhost:5000/products', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Product add successfully ! ',
        showConfirmButton: false,
        timer: 1500
      })
    })


  }



  return (
   
    <div>
            <div className={style.invoicesWrap}>
            <div className="mb-8 mt-5">
            <h6 className="text-2xl font-bold">Invoices</h6>
            <small>Invoices / New Invoice </small>
          </div>
              <form onSubmit={handleSubmit(handleSignUp)} className="select">
                <div className={style.formControlWrap}>
                  <div className={style.invoices}>
                    <div>
                      <div className="flex mb-3">
                        <div className={style.formControl}>
                          <label > Select </label>
                          <select 
                           {...register("name")}
                           name='name'>
                            <option value="Select Client">Select Client</option>
                            <option value="John Doe">John Doe</option>
                            <option value="James "> James</option>
                            <option value="Henry">Henry </option>
                            <option value="Select Client">Jack</option>
                          </select>
                        </div>
                        <div className="ml-5">
                          <div className={style.formControl}>
                            <div className="relative">
                            <label> Invoic Date </label>
                            <div className={style.inputField}
                             onClick={() => setOpen((open) => !open)}
                            >
                            <input
                            name='date'
                              value={calendar}
                              readOnly
                              {...register("date", { required: "Date is required" })}
                            />
                            <CalendarMonth className={style.calendarIcon}/>
                            </div>

                            <div className={style.calendar} ref={refOne}>
                              {open && (
                                <Calendar
                                  date={new Date()}
                                  onChange={handleSelect}
                                  className={style.calendarElement}
                                />
                              )}
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={style.formControl}>
                        <label> Trip </label>
                        <div
                          onClick={handleShowSearchBar}
                          className={style.trip}
                        >
                          <input 
                           {...register("trip", { required: "Trip is required "})}
                          name='trip' type="text" placeholder="2345" />
                          <KeyboardArrowDown
                            className={
                              showSearchBar
                                ? `${style.arrowKeyDown}`
                                : `${style.arrow}`
                            }
                          />
                        </div>
                        <div
                          className={
                            showSearchBar ? `${style.searchBar}` : "hidden"
                          }
                        >
                          <div className={style.singleSearchBox}>
                            <Search className={style.searchIcon} />
                            <input placeholder="Search" type="text" />
                          </div>
                          <div>
                            <small>12345</small>
                            <small>12345</small>
                            <small>12345</small>
                            <small>12345</small>
                            <small>12345</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={style.formControl}>
                      <div className={style.imageUpload}>
                        <div className="flex items-center">
                          <CloudUpload className={style.uploadIcon} />
                          <div>
                            <input 
                             {...register("file")}
                            name='file' type="file" id="files" className="hidden" />
                            <label for="files">Upload Plane Image </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.formControlWrap}>

                      <div className="flex justify-between px-2 ">
                        <div className={style.productLabel}>
                          <label> Product: </label>
                          <label> Product Type: </label>
                          <label> Description: </label>
                        
                        </div>
                        <div>
                        <label> Total </label>
                        </div>
                      </div>
                {inputList.map((x, i) => {
                  return (
                 <div  key={i}>
                   <div  className={style.invoices}>
                    <div>
                      {/* Product type  */}
                      <div className="flex mb-3">
                         <div className={style.formControl}>
                      
                        <div
                          onClick={handleProductTypeShow}
                          
                        >
                          <div className={style.ProductSelect}>
                          <input 
                          autoComplete="off"
                            name='productName'
                            {...register("productName")}
                          type="text" placeholder="Plane" />
                          <KeyboardArrowDown
                            className={
                              showProductType
                                ? `${style.arrowKeyDown}`
                                : `${style.arrow}`
                            }
                          />
                          </div>
                        </div>
                        <div
                          className={
                            showProductType ? `${style.searchBar}` : "hidden"
                          }
                        >
                          <div className={style.singleSearchBox}>
                            <Search className={style.searchIcon} />
                            <input placeholder="Search" type="text" />
                          </div>
                        
                          <div>
                            <small>Halicopter</small>
                            <small>Drinks </small>
                            <small>Flowers</small>
                            <small>Private Jet </small>
                            <small>Airbus</small>
                          </div>
                        </div>
                      </div>




                        <div className="ml-5">
                        <div className={style.formControl}>
                        <div
                          onClick={handleShowProduct}
                          
                        >
                          <div className={style.ProductSelect2}>
                          <input
                           autoComplete="off"
                          name='productType'
                          {...register("productType")}
                          type="text" placeholder="Falcon8X TBA/LTI" />
                          <KeyboardArrowDown
                            className={
                              product
                                ? `${style.arrowKeyDown}`
                                : `${style.arrow}`
                            }
                          />
                          </div>
                        </div>
                        <div
                          className={
                            product ? `${style.searchBar}` : "hidden"
                          }
                        >
                          <div className={style.singleSearchBox}>
                            <Search className={style.searchIcon} />
                            <input placeholder="Search" type="text" />
                          </div>
                          <div>
                            <small>Halicopter</small>
                            <small>Drinks </small>
                            <small>Flowers</small>
                            <small>Private Jet </small>
                            <small>Airbus</small>
                          </div>
                        </div>
                      </div>
                        </div>
                        <div className="ml-5">
                          <div className={style.formControl}>
                            <input
                             autoComplete="off"
                              {...register("description")}
                            name='description'
                              type="text"
                              placeholder="Product for Trip t85258"
                              className={style.description}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={style.formControl}>
                     
                      <div className="flex justify-center w-full items-center">
                        <div>
                          <input
                           autoComplete="off"
                           {...register("total")}
                          name='total'
                            placeholder="11.500.000"
                            className={style.totalField}
                            type="text"
                          />
                        </div>

                        {inputList.length !== 1 && (
                        <div onClick={() => handleremove(i)}  className={style.deleteIconWrap}>
                          <DeleteSweep className={style.deleteIcon} />
                        </div>
                         )}

                      </div>
                    </div>
                  </div>

                  {inputList.length - 1 === i && (
                 <div onClick={handleaddclick}>
                 <button className="text-[#3CE138] text-sm font-bold">+ Add Product </button>
                 </div>
                  )}

                 </div>
                   );
                  })}

                 
                  <div>
                    <hr className="my-3" />
                  </div>
                  <div className={style.subTotal}>
                    <div className={style.total}>
                      <div>
                        <strong>Subtotal : </strong>
                        <strong>TVA : </strong>
                      </div>
                      <div>
                        <small>16.550.000</small>
                        <small>2.800.000</small>
                      </div>
                    </div>
                  </div>
                  <div>
                    <hr className="mt-3" />
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <div className={style.buttonGroupWrap}>
                      <button type='submit'>Save</button>
                      <button>Cancel</button>
                      <Link href='/invoice'>  <button>Download Invoice </button></Link>
                     
                     
                    
                    </div>
                    <div>
                      <div className={style.total}>
                        <div>
                          <strong className="text-[#3CE138]">Total : </strong>
                        </div>
                        <div>
                          <small className="text-[#3CE138]">19.350.000</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
  );
};

export default dynamic(() => Promise.resolve(Invoices), { ssr: false });
