export default function Button(props) {
    return (
        <button 
        className={`
        rounded-lg
        ${props.color === 'pink' && 'bg-[#c92071] text-[#F5F5F5] text-center text-base text-bold'}
        ${props.color === 'orange' && 'bg-[#FFB31F] text-[#F5F5F5] text-center text-base text-bold'}
        ${props.size === 'sm' && 'w-28 h-10 !text-sm'}
        ${props.size === 'md' && 'w-56 h-12 '}
        `}
        onClick={props.handleClick}> 
           {props.title}
        </button>
    )
}