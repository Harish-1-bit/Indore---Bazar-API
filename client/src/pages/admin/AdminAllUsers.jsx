import React, { useEffect } from 'react'
import AdminSlidebar from '../../components/admin/AdminSlidebar'
import AdminHeader from '../../components/admin/AdminHeader'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllOrders, getAllShops, getAllUsers, UpdateUser } from '../../features/admin/AdminSlice';

const AdminAllUsers = () => {
      const { user } = useSelector((state) => state.auth);
  const {
    adminLoading,
    adminSuccess,
    adminError,
    adminErrorMessage,
    allUsers,
    allOrders,
    allShops,
  } = useSelector((state) => state.admin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserUpdate = (userDetails)=>{
    console.log(user)
    dispatch(UpdateUser(userDetails))
  }

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllShops());
    dispatch(getAllOrders());

    if (!user.isAdmin || !user) {
      navigate("/login");
    }

    if(adminErrorMessage && adminError){
      toast.error(adminErrorMessage,{position:'top-left'})
    }
  }, [user,adminErrorMessage,adminError]);

  if (adminLoading) {
    return (
      <div className=" text-center mt-10 text-6xl font-bold">Loading.....</div>
    );
  }


  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <AdminSlidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
         <div className="px-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Users Management</h1>
          <p className="text-gray-600 mt-1">Manage all users in the system</p>
        </div>
        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
          Add User
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search users by name or email..."
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            <button className="px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
              Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Joined Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
{
    allUsers.map((user)=>{
        return(
                          <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full"></div>
                    <p className="font-semibold text-gray-900">{user.name}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">{user.isShopowner? 'Shop-owner':'Customer'}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-700">{user.isActive? 'Active':'De-activated'}</span>
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{new Date(user.updatedAt).toLocaleDateString('EN-IN')}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
{
    user.isActive?(
                            <button onClick={()=>{handleUserUpdate({userId:user._id, isActive:false})}} className="px-3 py-1 text-sm text-red-600 border border-red-600 rounded hover:bg-red-50 transition-colors">
                      Deactivate
                    </button>
    ):(
                            <button onClick={()=>{handleUserUpdate({userId:user._id, isActive:true})}} className="px-3 py-1 text-sm text-green-600 border border-green-600 rounded hover:bg-red-50 transition-colors">
                      Activate
                    </button>
    )
}
                  </div>
                </td>
              </tr>
        )
    })
}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-600">Showing 1 to 5 of 12,543 users</p>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors">Previous</button>
            <button className="px-3 py-2 bg-blue-600 text-white rounded">1</button>
            <button className="px-3 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors">2</button>
            <button className="px-3 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors">3</button>
            <button className="px-3 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default AdminAllUsers
