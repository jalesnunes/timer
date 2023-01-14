import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../..'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Im going to work on</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="give your project a name"
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutes</span>
    </FormContainer>
  )
}
