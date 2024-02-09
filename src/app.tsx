import logo from './assets/logo-nlw-expert.svg'
import { NewCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'
import '@radix-ui/themes/styles.css';

export function App() {
  return (
    <div className='mx-auto max-w-6xl my-12 '>
  <img src={logo}/>
  <form className='w-full'>
      <input 
       type='text'
       placeholder='Busque em suas notas'
       className='w-full bg-transparent text-3xl font-semibold outline-none tracking-tigh placeholder:text-slate-500'
      />
  </form>
  <div className='h-px  bg-slate-700'/>

  <div className='grid grid-cols-3 mt-2 gap-6 auto-rows-[250px] '>
  <NewCard/>
  <NoteCard note={{
        date: new Date(),
        content: "hellow word"
  }}/>
</div>
  </div>
  )
}

