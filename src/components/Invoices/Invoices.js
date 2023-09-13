"use client";


import React, { useState, useRef, useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../Shared/NavBar/NavBar";
import style from "./invoices.module.css";
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


const Invoices = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showProductType, setShowProductType] = useState(false);
  const [product, setProduct] = useState(false);
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
  return (
   
    <div >
      <div ref={componentRef} className={style.invoicesWrap}>
        <div className={style.invoicesLeftSide}>
          <SideBar />
          <div className={style.invoicesRightSide}>
          <NavBar />
          <div className="mb-8 mt-5">
            <h6 className="text-2xl font-bold">Invoices</h6>
            <small>Invoices / New Invoice </small>
          </div>
          <div>
            <div className={style.invoicesWrap}>
              <form className="select">
                <div className={style.formControlWrap}>
                  <div className={style.invoices}>
                    <div>
                      <div className="flex mb-3">
                        <div className={style.formControl}>
                          <label> Select </label>
                          <select>
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
                              value={calendar}
                              readOnly
                             type='text'
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
                          <input type="text" placeholder="2345" />
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
                            <input type="file" id="files" class="hidden" />
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
                          <input  type="text" placeholder="Plane" />
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
                          <input  type="text" placeholder="Falcon8X TBA/LTI" />
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
                      <button>Save</button>
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
        </div>
        </div>
       
      </div>
    

    </div>
  );
};

export default dynamic(() => Promise.resolve(Invoices), { ssr: false });
