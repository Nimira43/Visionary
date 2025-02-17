import { Button } from '@/components/ui/button'

function HomePage() {
  return (
    <div>
      <h1 className='text-4xl logo text-primary p-4 bg-dark'>Visionary</h1>
      <Button className='m-4'>Login</Button>
      <p>Top Secret Message!!!!!</p>
      <p>Testing .env and .gitignore</p>
      <p>Seems like overkill to do this but it has caught me out before.</p>
    </div>
  )  
}

export default HomePage

