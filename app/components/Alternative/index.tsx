import styles from "./style.module.css";

interface AlternativeProps {
    label: string;
    order: number;
}

export function Alternative(props: AlternativeProps){
    const id = `alternative-${props.order}`;
    return (
    <label htmlFor={id} className={styles.components} tabIndex={0}>
                <input 
                tabIndex={-1}
                type="radio" 
                id={id}
                name="alternative" 
                defaultValue={props.order}
                />
                {props.label}
     </label>
    );
}