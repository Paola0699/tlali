'use client'
import React, { useEffect, useState } from 'react'
import TopNavigation from '../components/top-navigation'
import { Grid } from '@mui/material'
import BoxTitle from '../components/box-title'
import { getAllUsers } from '@/services/usersServices'
import UsuariosTable from './usuarios-table'
import { getAdminUser } from '@/services/userServices'
import { auth } from '@/firebase/firebase'
import { addUserData } from '@/redux/reducers/user'
import { useDispatch } from 'react-redux'

const Usuarios = () => {
  const [loading, setLoading] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const dispatch = useDispatch();

  const handleGetUserData = async (uid) => {
    try {
      const response = await getAdminUser(uid);
      return(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetUsers = async() => {
    setLoading(true)
    try{
    const response = await getAllUsers();
    setUsersList(response);
    }catch(error){
      console.log(error)
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log(user)
        const userData = await handleGetUserData(user.uid);
        console.log(userData);
        if(userData){
          dispatch(addUserData({uid:user.uid,...userData}));
        }
      }
    });  
    handleGetUsers();
  },[]);

  return (
    <>
    <TopNavigation />
    <Grid
      container
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
        overflow: "scroll",
      }}
      padding={10}
    >
      <Grid item xs={12}>
        <BoxTitle
          title={"Usuarios"}
          subtitle={
            "Aquí encontrarás los usuarios que se han registrado en la plataforma."
          }
        />
        <br></br>
        <UsuariosTable data={usersList} loading={loading} handleGetUsers={handleGetUsers}/>
      </Grid>
    </Grid>
  </>
  )
}

export default Usuarios