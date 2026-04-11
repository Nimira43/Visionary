'use client'

import { deleteEducationById } from '@/actions/education'
import { IEducation } from '@/app/interfaces'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineEdit } from 'react-icons/ai'
import { PiTrash } from 'react-icons/pi'

function EducationTable({
  education
}: {
  education: IEducation[]
}) {
  const [loading, setLoading] = useState(false)
  const [selectedEducationIdToDelete, setSelectedEducationIdToDelete] = useState<string | null>(null)
  const router = useRouter()
  const columns = ['Degree', 'Institution', 'Location', 'Start Date', 'End Date', 'Percentage', 'Created At', 'Actions']

  const deleteEducationHandler = async (id: string) => {
    try {
      setLoading(true)
      setSelectedEducationIdToDelete(id)
      const response = await deleteEducationById(id)

      if (!response.success) {
        throw new Error(response.message)
      }

      toast.success(response.message)
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setSelectedEducationIdToDelete(null)
      setLoading(false)
    }
  }

  return (
    <div className='mt-7'>
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
          {education.map((education) => (
            <TableRow
              key={education.id}
            >
              <TableCell>{education.degree}</TableCell>
              <TableCell>{education.institution}</TableCell>
              <TableCell>{education.location}</TableCell>
              <TableCell>
                {dayjs(education.start_date).format('DD MMM, YYYY')}
              </TableCell>
              <TableCell>
                {dayjs(education.end_date).format('DD MMM, YYYY')}
              </TableCell>
              <TableCell>{education.percentage}</TableCell>
              <TableCell>
                {dayjs(education.created_at).format('DD MMM, YYYY')}
              </TableCell>
              <TableCell>
                <div className='flex gap-5'>
                  <Button
                    variant='outline'
                    size={'icon'}
                    onClick={() => 
                      deleteEducationHandler(education.id)
                    }
                    disabled={
                      loading && selectedEducationIdToDelete === education.id
                    }
                  >
                    <PiTrash size={12} />
                  </Button>
                  <Button
                    variant='outline'
                    size={'icon'}
                    onClick={() => router.push(
                      `/account/education/edit/${education.id}`
                    )}
                  >
                    <AiOutlineEdit size={12} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default EducationTable
