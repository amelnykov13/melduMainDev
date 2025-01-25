import '../styles/components.css'

export default function InputField({width = '8vw'}) {
    const style = {
        width: width || 'auto'
    }
    return (
        <input className='firstOperationsInputs' style={style}/>
    )
}