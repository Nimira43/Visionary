import { getUserProfileById } from '@/actions/users'

interface PortfolioHomePageParams {
  params: {
    id: string
  }
}

async function PortfolioHomePage({ params}: PortfolioHomePageParams) {
  const { id } = await params
  const userProfileResponse = getUserProfileById(id)

  return (
    <div>
      Portfolio Home Page
    </div>
  )
}

export default PortfolioHomePage