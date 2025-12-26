'use client'

import { IProject } from '@/app/interfaces'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { PiTrash } from 'react-icons/pi'
import { AiOutlineEdit } from 'react-icons/ai'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function ProjectsTable({ projects }: {
  projects: IProject[]
}) {
  const [loading, setLoading] = useState(false)
  const [selectedProjectIdToDelete, setSelectedProjectIdToDelete] = useState<string | null>(null)
  const router = useRouter()
  const columns = ['Name', 'Demo Link', 'Repo Link', 'Created At', 'Actions']

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
          {projects.map((project) => (
            <TableRow
              key={project.id}
            >
              <TableCell>{project.name}</TableCell>
              <TableCell>{project.demo_link}</TableCell>
              <TableCell>{project.repo_link}</TableCell>
              <TableCell>
                {dayjs(project.created_at).format('DD MMM, YYYY')}
              </TableCell>
              <TableCell>
                <div className='flex gap-5'>
                  <Button
                    variant='outline'
                    size={'icon'}
                  >
                    <PiTrash size={12} />
                  </Button>
                  <Button
                    variant='outline'
                    size={'icon'}
                    onClick={() => router.push(
                      `/account/projects/edit/${project.id}`
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

export default ProjectsTable
