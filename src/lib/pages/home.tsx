/* eslint-disable react-hooks/rules-of-hooks */
import { signOut } from "firebase/auth";
import TransactionForm from "../../components/molecules/transactionForm";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../../components/ui/dialog";
import { DialogHeader } from "../../components/ui/dialog";
import { auth, db } from "../../lib/firebase";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { DataTable } from "../../components/ui/transactionDataTable";
import { columns } from "../../components/ui/transactionColumn";
import { useStore } from "../../store";

const home = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  const {loggedIn ,LogOut} = useStore()
  const [transactionList , SetTransactionList]  = useState([{
    amount : "",
    description: "",
    title: "",
    transactionTypes: "",
    uid: ""
  }])

  async function signout() {
    LogOut()
    signOut(auth)
      .then(() => navigate("/login"))
      .catch((error) => {
        console.log(error);
      });
  }
  
    useEffect(()=>{

        if(!loggedIn){
         navigate("/login")
        }

      const getData = async() =>{
        const querySnapshot = await getDocs(collection(db, "transactions"));
        const list:any = []
        querySnapshot.forEach((doc) => {
         list.push(doc.data())
        }
      )
        SetTransactionList(list)
      }
       getData()
    },[])

  return (
    <>
      <h1 className="p-5">Expance</h1>
      <Button onClick={signout}>Sign Out</Button>
      <Dialog>
        <DialogTrigger>
          <Button>Add Transaction</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Expances</DialogTitle>
            <DialogDescription>
              Manage your transition and update your balance
            </DialogDescription>
          </DialogHeader>
          <TransactionForm />
        </DialogContent>
      </Dialog>

      <DataTable columns={columns} data = {transactionList}></DataTable>
    </>
  );
};

export default home;
