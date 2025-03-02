import React, { Children } from "react"

// function transformChild(child) {
//     const children = Children.toArray(child)

//     if (children.length > 1)
//         for (let child of children) {
            
//         }
//     }
//     return child
// }

export function Accordion({ children }: React.PropsWithChildren) {

    const childrenMapped = Children.map(children, (child, index) => {
        return React.cloneElement(child, {
            onClick: (e) => {
                if (e.target.dataset.toggableGroup) {
                    const group = e.target
                    const items = group.querySelectorAll(`[data-toggable-item="${e.target.dataset.toggableItem}"]`)

                    for (let item of items) {
                        if (item.classList) {
                            item.classList.toggle(item.dataset.toggableClass)
                        }
                    }
                } else {
                    if (e.target.dataset && e.target.dataset.toggableClass) {

                        if (e.target.dataset.toggableItem) {
                            const group = e.target.closest(`[data-toggable-group="${e.target.dataset.toggableItem}"]`)
                            if (group) {
                                const items = group.querySelectorAll(`[data-toggable-item="${e.target.dataset.toggableItem}"]`)
    
                                for (let item of items) {
                                    if (item.classList) {
                                        item.classList.toggle(item.dataset.toggableClass)

                                        if (item.dataset.contentScroll) {
                                            if (item.classList.contains(item.dataset.toggableClass))
                                                item.style.maxHeight = item.scrollHeight + 'px'
                                            else
                                            item.style.maxHeight = null
                                        }
                                    }
                                }
                            }
    
                        } else {
                            e.target.classList.toggle(e.target.dataset.toggableClass)
                        }
                    }
                }
            }
        })
    })

    return (
        childrenMapped
    )
}