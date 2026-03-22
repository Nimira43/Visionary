'use client'

import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import SkillForm from './_components/skill-form'
import toast from 'react-hot-toast'
import { getSkillsByUserId } from '@/actions/skills'
import usersGlobalStore, { IUsersGlobalStore } from '@/global-store/users-store'
import Spinner from '@/components/ui/spinner'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { PiTrash } from 'react-icons/pi'
import { AiOutlineEdit } from 'react-icons/ai'
import { ISkill } from '@/app/interfaces'

function SkillsPage() {
  const [openSkillForm, setOpenSkillForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [skills, setSkills] = useState([])
  const { user } = usersGlobalStore() as IUsersGlobalStore

  const fetchData = async () => {
    try {
      setLoading(true)
      const response: any = await getSkillsByUserId(user?.id!)
      if (!response.success) {
        throw new Error(response.message)
      }
      setSkills(response.data)
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const deleteSkillHandler = async (id: string) => {}

  useEffect(() => {
    fetchData()
  }, [])

  const columns = [
    '',
    'Name',
    'Level',
    'Actions',
  ]

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
        {loading && (
          <div className='flex justify-center items-center mt-40'>
            <Spinner />
          </div>
        )}
        {skills.length && (
          <Table className='border border-grey-light'>
            <TableHeader className='bg-grey-light-extra'>
              <TableRow>
                {columns.map((column, index) => (
                  <TableHead 
                    key={index}
                    className='font-medium'
                  >
                    {column}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {skills.map((skill: ISkill) => (
                <TableRow
                  key={skill.id}
                >
                  <TableCell>
                    {skill.image && (
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className='w-20 h-20 rounded'
                      />
                    )}
                  </TableCell>
                  <TableCell>
                    {skill.name}
                  </TableCell>
                  <TableCell>
                    {skill.level}
                  </TableCell>
                  <TableCell>
                    <div className='flex gap-5'>
                      <Button
                        variant='outline'
                        size={'icon'}
                        onClick={() => 
                          deleteSkillHandler(skill.id)
                        }
                      >
                        <PiTrash size={12} />
                      </Button>
                      <Button
                        variant='outline'
                        size={'icon'}
                        onClick={() => {
                          setOpenSkillForm(true)
                        }}
                      >
                        <AiOutlineEdit size={12} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}

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

