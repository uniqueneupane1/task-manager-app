"use client";

import TaskList from '@/components/TaskList'
import TaskForm from '../components/TaskForm'
import React, { useState } from 'react'
import Header from '@/components/header/Header'

function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TaskForm />
      <TaskList searchTerm={searchTerm} />
    </>
  )
}

export default Page