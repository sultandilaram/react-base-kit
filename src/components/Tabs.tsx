import React from 'react'

interface TabsProps {
  children: TabContent[];
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}
export function Tabs(props: TabsProps) {

  const [activeTab, setActiveTab] = React.useState(0)

  return (
    <div {...props} className={"d-flex flex-col gap0 items-end " + (props.className || "")} >
      <div className="d-flex gap0 bg-bg-dark">
        {props.children.map((tab, index) => (
          <div
            key={index}
            className={`clickable b1 py-5 px-10 ${(index === activeTab ? "bg-primary b-primary" : "hover-bg-bg")}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="w100 p-5">
        {props.children[activeTab].content}
      </div>
    </div>
  )
}

interface TabContent {
  name: string;
  content: React.ReactNode;
}