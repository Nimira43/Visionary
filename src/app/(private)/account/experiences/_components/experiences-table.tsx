'use client'

import { deleteExperienceById } from '@/actions/experiences'
import { IExperiences } from '@/app/interfaces'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineEdit } from 'react-icons/ai'
import { PiTrash } from 'react-icons/pi'

function ExperiencesTable({
  experiences
}: {
  experiences: IExperiences[]
}) {
  const [loading, setLoading] = useState(false)
  const [selectedExperienceIdToDelete, setSelectedExperienceIdToDelete] = useState<string | null>(null)
  const router = useRouter()
  const columns = ['Role', 'Company', 'Start Date', 'End Date', 'Location', 'Created At', 'Actions']

  const deleteExperienceHandler = async (id: string) => {
    try {
      setLoading(true)
      setSelectedExperienceIdToDelete(id)
      const response = await deleteExperienceById(id)

      if (!response.success) {
        throw new Error(response.message)
      }

      toast.success(response.message)
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setSelectedExperienceIdToDelete(null)
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
          {experiences.map((experience) => (
            <TableRow
              key={experience.id}
            >
              <TableCell>{experience.role}</TableCell>
              <TableCell>{experience.company}</TableCell>
              <TableCell>{experience.location}</TableCell>
              <TableCell>
                {dayjs(experience.start_date).format('DD MMM, YYYY')}
              </TableCell>
              <TableCell>
                {dayjs(experience.end_date).format('DD MMM, YYYY')}
              </TableCell>
              <TableCell>
                {dayjs(experience.created_at).format('DD MMM, YYYY')}
              </TableCell>
              <TableCell>
                <div className='flex gap-5'>
                  <Button
                    variant='outline'
                    size={'icon'}
                    onClick={() => 
                      deleteExperienceHandler(experience.id)
                    }
                    disabled={
                      loading && selectedExperienceIdToDelete === experience.id
                    }
                  >
                    <PiTrash size={12} />
                  </Button>
                  <Button
                    variant='outline'
                    size={'icon'}
                    onClick={() => router.push(
                      `/account/experiences/edit/${experience.id}`
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

export default ExperiencesTable
