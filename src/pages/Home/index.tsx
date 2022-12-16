import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'inform your task name'),
  minutesAmount: zod.number().min(5).max(60),
})

interface NewCycleFormData {
  task: string
  minutesAmount: number
}

export function Home() {
  // this hook to have the best between controlled and uncontrolled events
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)
    reset()
  }

  // these 3 variables is to enable the submit button just when inputs are filled
  const task = watch('task')
  const minutesAmount = watch('minutesAmount')
  const isSubmitdisabled = !task || !minutesAmount

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">I'm going to work on</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="give your project a name"
            // way to use useForm hook
            {...register('task')}
          />
          {/* to display a list of options for tasks already done */}
          <datalist id="task-suggestions">
            <option value="Agora vai 1" />
            <option value="Agora vai 2" />
            <option value="Agora vai 3" />
            <option value="Agora vai 4" />
          </datalist>

          <label htmlFor="minutesAmount">Durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutes</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitdisabled} type="submit">
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
