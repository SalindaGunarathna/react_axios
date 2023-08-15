import logo from './logo.svg';
import './App.css';
import axios  from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const [DeviceName,setDeviceName]  = useState();
  const [DeviceColor,setDeviceColor]  = useState();
  const [DeviceCapacity,setDeviceCapacity]  = useState();

  const url = "https://api.restful-api.dev/objects";

  useEffect(()=>{
    
    const fetchData = async()=>{

      try{
        const  result = await axios.get(url);

        console.log (result);
        console.log ('working');


      const needData = result.data[2];

      setDeviceName(needData.name);
      setDeviceColor(needData.data.color);
      setDeviceCapacity(needData.data['capacity GB']);

      }catch(error){
        console.log(error);

      }

      
    };

    fetchData();

  },[]);


  return(

    <div className="backGround">
    <div className="device">{DeviceName}</div>
    <div className="device-color">{DeviceColor}</div>
    <div className="device-capaciry">{DeviceCapacity}</div>

    </div>



  ) ;
}

export default App;
