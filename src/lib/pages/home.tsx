import TransactionForm from "../../components/molecules/transactionForm"
import { Button } from "../../components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "../../components/ui/dialog"
import { DialogHeader } from "../../components/ui/dialog"


const home = () => {
  return (
    <>
    <h1>Expance</h1>
    <Dialog>
    <DialogTrigger><Button>Add Transaction</Button></DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Add Expances</DialogTitle>
        <DialogDescription>
          Manage your transition and update your balance
        </DialogDescription>
      </DialogHeader>
      <TransactionForm/>
    </DialogContent>
  </Dialog>
  </>
  )
}

export default home