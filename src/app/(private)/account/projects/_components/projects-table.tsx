'use client'

import { IProject } from '@/app/interfaces'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

function ProjectsTable({ projects }: {
  projects: IProject[]
}) {
  const columns = ['Name', 'Demo Link', 'Repo Link', 'Created At', 'Actions']

  return (
    <div className='mt-7'>
      <Table className='border-grey-light'>
        <TableHeader className='bg-grey-light-extra'>
          <TableRow>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default ProjectsTable
