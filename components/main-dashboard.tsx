"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import UserTable from "./userMangement/user-table";
import PostTable from "./postMangement/post-table";
import {
  Search
} from "lucide-react";




const mockUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active", numberOfPosts: 5 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active", numberOfPosts: 3 },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User", status: "Inactive", numberOfPosts: 0 },
  ];
  

const mockPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      author: "John Doe",
      status: "Published",
      date: "2024-01-15",
      category: "React Basics",
    },
    {
      id: 2,
      title: "Advanced TypeScript Tips",
      author: "Jane Smith",
      status: "Draft",
      date: "2024-01-14",
      category: "TypeScript",
    },
    {
      id: 3,
      title: "Building Modern UIs",
      author: "Bob Johnson",
      status: "Published",
      date: "2024-01-13",
      category: "UI Design",
    },
  ];
  

interface AdminDashboardProps {
  activeTab: string;
}

export default function AdminDashboard({ activeTab }: AdminDashboardProps) {
  const [users, setUsers] = useState(mockUsers);
  const [posts, setPosts] = useState(mockPosts);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="flex-1">
      <div className="px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {activeTab === "users" ? "Users Management" : "Posts Management"}
            </h2>
            <p className="text-gray-600 mt-1">
              {activeTab === "users"
                ? "Manage user accounts and permissions"
                : "Create, edit, and manage blog posts"}
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder={`Search ${activeTab}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-96"
          />
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow">
          {activeTab === "users" && (
            <UserTable users={filteredUsers} onDelete={handleDeleteUser} />
          )}

          {activeTab === "posts" && (
            <PostTable posts={filteredPosts} onDelete={handleDeletePost} />
          )}
        </div>
      </div>
    </div>
  );
}

// function UsersTable({ users, onDelete }: any) {
//   return (
//     <div className="overflow-x-auto">
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Name</TableHead>
//             <TableHead>Email</TableHead>
//             <TableHead>Role</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead>Actions</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {users.map((user: any) => (
//             <TableRow key={user.id} className="hover:bg-gray-50">
//               <TableCell className="font-medium">{user.name}</TableCell>
//               <TableCell>{user.email}</TableCell>
//               <TableCell>
//                 <Badge variant={user.role === "Admin" ? "default" : "secondary"}>
//                   {user.role}
//                 </Badge>
//               </TableCell>
//               <TableCell>
//                 <Badge variant={user.status === "Active" ? "default" : "destructive"}>
//                   {user.status}
//                 </Badge>
//               </TableCell>
//               <TableCell>
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Button variant="ghost" size="sm">
//                       <MoreHorizontal className="h-4 w-4" />
//                     </Button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent>
//                     <DropdownMenuItem onClick={() => onDelete(user.id)} className="text-red-600">
//                       <Trash2 className="mr-2 h-4 w-4" />
//                       Delete
//                     </DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }

// function PostsTable({ posts, onDelete }: any) {
//   return (
//     <div className="overflow-x-auto">
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Title</TableHead>
//             <TableHead>Author</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead>Actions</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {posts.map((post: any) => (
//             <TableRow key={post.id} className="hover:bg-gray-50">
//               <TableCell className="font-medium">{post.title}</TableCell>
//               <TableCell>{post.author}</TableCell>
//               <TableCell>
//                 <Badge variant={post.status === "Published" ? "default" : "secondary"}>
//                   {post.status}
//                 </Badge>
//               </TableCell>
//               <TableCell>{post.date}</TableCell>
//               <TableCell>
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Button variant="ghost" size="sm">
//                       <MoreHorizontal className="h-4 w-4" />
//                     </Button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent>
//                     <DropdownMenuItem onClick={() => onDelete(post.id)} className="text-red-600">
//                       <Trash2 className="mr-2 h-4 w-4" />
//                       Delete
//                     </DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }
