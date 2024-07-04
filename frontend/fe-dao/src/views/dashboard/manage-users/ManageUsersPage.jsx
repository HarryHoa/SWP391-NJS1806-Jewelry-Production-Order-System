import { useAllUsers } from "@/hooks/userHooks";
import UsersTable from "./UsersTable";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";


const ManageUsersPage = () => {
    const { users,loading} = useAllUsers();

    const navigate = useNavigate(); 
    const handleClick = () => navigate('/dashboard/add-product'); 

    return (
        <main className="p-4 xl:flex flex-1 xl:space-x-4">
                <div className="flex-1">
                    <Card>
                        <CardHeader className="px-7">
                            <CardTitle>Manage Users</CardTitle>
                            <div className='flex justify-between align-middle'>
                            <CardDescription>
                                Create, edit and update existing products
                            </CardDescription>
                            <Button className="h-15 w-1/6 bg-stone-700" onClick={handleClick} >Create Product</Button>
                            </div>
                         </CardHeader>
                         <CardContent>
                            <UsersTable users={users}/>
                         </CardContent>
                    </Card>
                </div>
        </main>
    )
} 

export default ManageUsersPage;