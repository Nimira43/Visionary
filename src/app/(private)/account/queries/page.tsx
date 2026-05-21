import { getCurrentUser } from '@/actions/users'
import { fetchQueriesOfUser } from '@/actions/queries'
import { IQuery } from '@/app/interfaces'
import dayjs from 'dayjs'

async function QueriesPage() {
  const userResponse : any = await getCurrentUser()

  if (!userResponse.success) {
    return (
      <div>Failed to load user data.</div>
    )
  }

  const queriesResponse: any = await fetchQueriesOfUser(
    userResponse?.data?.id!
  )

  if (!queriesResponse.success) {
    return (
      <div>Failed to load queries</div>
    )
  }

  const queries: IQuery[] = queriesResponse.data

  return (
    <div className='min-h-screen flex flex-col items-center p-4'>
      <div className='w-full max-w-5xl'>
        <h1 className='text-2xl text-main-dark font-medium uppercase'>
          Queries
        </h1>  
        <div className='mt-5'>
          {queries.length === 0 ? (
            <div className='p-3 border border-grey-2 bg-grey-4 rounded text-sm'>
              No queries found
            </div>
          ) : (
            <div className='flex flex-col gap-5'>
              {queries.map((query) => (
                <div
                  key={query.id}
                  className='border border-grey-2 p-3 rounded flex flex-col gap-2'
                >
                  <h1 className='text-sm font-medium'>
                    {query.name} - {query.email}
                  </h1>
                  <p className='text-sm'>
                    {query.message}
                  </p>
                  <div className='flex justify-end'>
                    <span className='text-xs'>
                      {dayjs(query.created_at).format('DD MMM YYYY HH:mm')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default QueriesPage
