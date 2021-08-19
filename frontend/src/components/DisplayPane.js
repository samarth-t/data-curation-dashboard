import { React, useEffect, useState } from 'react'
import styles from "../styles/splitScreen.css"

export default function DisplayPane(props) {
    const [highlightedSrc, setHighlightedSrc] = useState("")

    const highlightText = (xpath) => {
        let doc = new DOMParser().parseFromString(props.rawHTML, 'text/html');
        console.log(doc)
        
        if(xpath !== "") {
            let xpathNode = doc.evaluate(xpath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            console.log(xpathNode)
    
            const sHtml = `<script>
                    var elmnt = document.getElementById("highlighted");
                    // elmnt.scrollTop -= 100;
                    elmnt.scrollIntoView();
                </script>
            `;
            const frag = document.createRange().createContextualFragment(sHtml)
            doc.body.appendChild(frag);
    
            try {
                const highlightedNode = xpathNode.singleNodeValue.innerHTML;
                xpathNode.singleNodeValue.innerHTML =
                    `
                        <span id="highlighted" style="background-color: #FFFF00"'>
                        ${highlightedNode}
                        </span>
                    `;
                setHighlightedSrc(doc.documentElement.innerHTML)
            } catch {
                // alert("Can't find element")
            }
        }
    }

    useEffect(() => {
        setHighlightedSrc("");
        highlightText(props.xpath);
        // props.setHighlightFunc(() => (xpath) => highlightText(xpath))
    }, [props.rawHTML, props.xpath])


    return (
        <div className={styles.pane} style={{ height: '92vh', minWidth: '100%' }}>
            {/* {
                iframe
            } */}
            {/* <div dangerouslySetInnerHTML={{__html: doc.body.outerHTML}} /> */}
            <iframe srcDoc={highlightedSrc === "" ? props.rawHTML : highlightedSrc} style={{ height: '100vh', minWidth: '100%' }} />
        </div>
    )
}