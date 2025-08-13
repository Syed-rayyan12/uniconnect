"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

// Type for a single user
interface User {
  id: number;
  name: string;
  email: string;
  numberOfPosts?: number; // Optional field for number of posts
}

interface UserTableProps {
  users: User[];
  onDelete: (id: number) => void;
}

export default function UserTable({ users,onDelete }: UserTableProps) {
  return (
    <div className="bg-white shadow rounded-lg p-4 ">
      <h2 className="text-lg font-semibold mb-4">Users</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Number Of Posts</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users && users.length > 0 ? (
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.numberOfPosts}</TableCell>
                <TableCell className="text-right space-x-2">
                  <button
                    onClick={() => onDelete(user.id)}
                  >
                    <Trash className="w-6 h-6 text-red-500"/>
                  </button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center w-full text-gray-500 py-4">
                No users found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
