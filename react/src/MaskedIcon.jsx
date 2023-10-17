export const MaskedIcon = ({ path, height, color }) => {
    return (
        <div className={`bg-radar-secondary bg-radar-${color}`} style={{ WebkitMask: `url(${path}) no-repeat center / contain`, width: `auto`, height: height }}>
            <img className="w-full h-full opacity-0" src={path}></img>
        </div>
    )
}