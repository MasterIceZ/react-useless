import reactLogo from "./assets/react.svg"
import "./App.css"

import Card, { CardProps } from "./components/Card"

import { useLess } from "./hooks/useLess"
import { useEven } from "./hooks/useEven"
import { useCuteAndFunny } from "./hooks/useCuteAndFunny"
import { useRandomCodingStamina } from "./hooks/useRandomCodingStamina"
import { useTruthy } from "./hooks/useTruthy"
import { useApple } from "./hooks/useApple"
import { useLogException } from "./hooks/useLogException"
import { useSus } from "./hooks/useSus"
import { useEmpty } from "./hooks/useEmpty"
import { useFullStop } from "./hooks/useFullStop"
import { useSmile } from "./hooks/useSmile"
import { useWeird } from "./hooks/useWeird"
import { useRandom } from "./hooks/useRandom"
import { useDivisibleByThree } from "./hooks/useDivisibleByThree"
import { useSalim } from "./hooks/useSalim"
import { useAny } from "./hooks/useAny"
import { useRickRoll } from "./hooks/useRickRoll"
import { useLongerState } from "./hooks/useLongerState"
import { useSkoy } from "./hooks/useSkoy"

const UseWeirdExampleComponent = () => {
  return (
    <>
      <code>
        const weird = useWeird() &lt;button style=&#123;weird&#125
        &gt;Haha&lt;/button&gt
      </code>
      <button style={useWeird(12)}>Hahaha</button>
    </>
  )
}

const UseSalimExampleComponent = () => {
  const { quote: salimQuote, refetch: salimRefetch } = useSalim()

  return (
    <>
      <code>const {"{ quote, refetch }"} = useSalim()</code>
      <div>quote is {salimQuote}</div>
      <button onClick={() => salimRefetch()}>Click to refetch</button>
    </>
  )
}

function App() {

  const hooks: CardProps[] = [
    {
      desc: "useLess - a useless hook that returns initial value.",
      examples: [
        { code: "const value = useLess(0)", value: useLess(0) },
        {
          code: 'const anotherValue = useLess("ඞ")',
          value: useLess("ඞ"),
        },
      ],
      githubUsername: "narze",
    },
    {
      desc: "useEven - a useful hook to check number is even or not.",
      examples: [
        {
          code: "const value = useEven(2)",
          value: useEven(2).toString(),
        },
        {
          code: "const anotherValue = useEven(1)",
          value: useEven(1).toString(),
        },
      ],
      githubUsername: "rayriffy",
    },
    {
      desc: "useVoid - Does nothing, and returns nothing.",
      examples: [
        { code: "const value = useVoid()", value: "value is nothing" },
      ],
      githubUsername: "rayriffy",
    },
    {
      desc: "useCuteAndFunny - 😭",
      examples: [
        {
          code: `const value = useCuteAndFunny('https://www.pixiv.net/en/artworks/101491852')`,
          value: useCuteAndFunny("https://www.pixiv.net/en/artworks/101491852"),
        },
      ],
      githubUsername: "rayriffy",
    },
    {
      desc: "useSus - ඞ",
      examples: [
        {
          code: `const value = useSus("createSus")`,
          value: useSus(),
        },
      ],
      githubUsername: "richeyphu",
    },
    {
      desc: "useException - a useless hook to log message as error.",
      examples: [
        {
          code: `useLogException("An error is occured")`,
          value: useLogException("An error is occured"),
        },
      ],
      githubUsername: "GGolfz",
    },
    {
      desc: "useRandomCodingStamina - This hook will return beverage to add more stamina while coding.",
      examples: [
        {
          code: "const beverage = useRandomCodingStamina()",
          value: `Your stamina's add up is ${useRandomCodingStamina()}`,
        },
      ],
      githubUsername: "sikkapat79",
    },
    {
      desc: "useTruthy - This hook will return true to eternity.",
      examples: [
        {
          code: "const isAccept = useTruthy()",
          value: `A: Should we hangout to night ?\n
          B: \n ${useTruthy() ? "Yes" : "No"}`,
        },
      ],
      githubUsername: "sikkapat79",
    },
    {
      desc: "useSmile - 😊",
      examples: [
        {
          code: "const value = useSmile('hello')",
          value: useSmile("hello"),
        },
      ],
      githubUsername: "b5710546232",
    },
    {
      desc: "useWeird - Does something weird",
      examples: [UseWeirdExampleComponent()],
      githubUsername: "pontakornth",
    },
    {
      desc: "useFullStop - a useless hook that return string value with (.) full stop.",
      examples: [
        {
          code: `const value = useFullStop("Hello World")`,
          value: useFullStop("Hello World"),
        },
      ],
      githubUsername: "ercusz",
    },
    {
      desc: "useApple - Does nothing, and returns random apple.",
      examples: [
        {
          code: "const value = useApple()",
          value: `value is either 🍎 or 🍏 : ${useApple()}`,
        },
      ],
      githubUsername: "piromsurang",
    },
    {
      desc: "useEmpty - a useless hook that returns empty string.",
      examples: [
        {
          code: `const value = useEmpty()`,
          value: useEmpty(),
        },
      ],
      githubUsername: "armsasmart",
    },
    {
      desc: "useDivisibleByThree - an overengineered hook to check if a number is Divisible by Three or not.",
      examples: [
        {
          code: "const value = useDivisibleByThree(200)",
          value: useDivisibleByThree(200).toString(),
        },
        {
          code: "const anotherValue = useDivisibleByThree(1233)",
          value: useDivisibleByThree(1233).toString(),
        },
      ],
      githubUsername: "Parajulibkrm",
    },
    {
      desc: "useRandom -  a useless hook that returns random number.",
      examples: [
        {
          code: `const value = useRandom()`,
          value: useRandom(),
        },
      ],
      githubUsername: "annibuliful",
    },
    {
      desc: "useSalim - A hook that fetch quote from Salim API",
      examples: [UseSalimExampleComponent()],
      githubUsername: "Leomotors",
    },
    {
      desc: "useAny - returns same value with DefinitelyNotAny type",
      examples: [
        {
          code: `const value = useAny(123)`,
          value: `${useAny(123)} (type will be "any")`,
        },
      ],
      githubUsername: "narze",
    },
    {
      desc: "useLongerState - it will return such a longer hook than original useState. Hahaha",
      examples: [
        {
          code: "const [countLongerState , setCountLongerState] = useLongerState[0]",
          value: `Current count is ${useLongerState(0)[0]}`
        }
      ],
      githubUsername: "sikkapat79"
    },
    {
      desc: "useSkoy - returns SkoyLang for us SkoyPeople",
      examples: [
        {
          code: `const value = useSkoy("รักมิใช่ดวงดาวเมื่อพราวแสง")`,
          value: `${useSkoy("รักมิใช่ดวงดาวเมื่อพราวแสง")}`,
        },
      ],
      githubUsername: "santhitak",
    },
	{
      desc: "useRickRoll - returns Nerver Gonna Give You Up song url",
      examples: [
        {
          code: `const value = useRickRoll()`,
          value: `${useRickRoll()}`,
        },
      ],
      githubUsername: "MasterIceZ",
	}
  ] // Add your own hooks usage above this comment (at the end of the list)
  // Create a new component if your hook needs more customization

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Useless Hooks</h1>
      <h2>({hooks.length} hooks)</h2>
      {hooks.map((props: CardProps, idx) => {
        return <Card key={idx} {...props} />
      })}

      <div className="card">
        <h2>
          Add your own useless hooks and
          <a
            href="https://github.com/narze/react-useless"
            target="_blank"
            style={{ paddingLeft: "0.25em" }}
          >
            submit a Pull Request!
          </a>
        </h2>
        or
        <h2>
          Request or find an idea for useless hooks in
          <a
            href="https://github.com/narze/react-useless/issues"
            target="_blank"
            style={{ paddingLeft: "0.25em" }}
          >
            Github Issues
          </a>
        </h2>
      </div>
    </div>
  )
}

export default App
