'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import SkillForm from './_components/skill-form'

function SkillsPage() {
  const [openSkillForm, setOpenSkillForm] = useState(false)
  return (
    <div className='min-h-screen flex flex-col items-center p-4'>
      <div className='w-full max-w-5xl'>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-2xl text-main-dark font-medium uppercase'>
            Skills
          </h1>
          <Button
            onClick={() => setOpenSkillForm(true)}
            className='main-button'
          >
            Add Skill
          </Button>
        </div>
        {openSkillForm && (
          <SkillForm
            openSkillForm={openSkillForm}
            setOpenSkillForm={setOpenSkillForm}
            reloadData={() => {}}
            formType='add'
          />
        )}
      </div>
    </div>
  )
}

export default SkillsPage

