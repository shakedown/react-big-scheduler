import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import { MinusSquareOutlined, PlusSquareOutlined } from '@ant-design/icons';

class ResourceView extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        schedulerData: PropTypes.object.isRequired,
        contentScrollbarHeight: PropTypes.number.isRequired,
        slotClickedFunc: PropTypes.func,
        slotItemTemplateResolver: PropTypes.func,
        toggleExpandFunc: PropTypes.func
    }

    render() {

        const {schedulerData, contentScrollbarHeight, slotClickedFunc, slotItemTemplateResolver, toggleExpandFunc} = this.props;
        const {renderData, config} = schedulerData;

        let width = schedulerData.getResourceTableWidth() - 2;
        let paddingBottom = contentScrollbarHeight;
        let displayRenderData = renderData.filter(o => o.render);

        let resourceList = displayRenderData.map((item) => {
            let bgColor = config.defaultEventBgColor;
            if (!!item.slotColor){
                bgColor = item.slotColor;
            }
            
            let indents = [];
            for(let i=0;i<item.indent;i++) {
                indents.push(<span key={`es${i}`} className="expander-space"></span>);
            }
            let indent = <span key={`es${item.indent}`} className="expander-space"></span>;
            if(item.hasChildren) {
                indent = item.expanded ? (
                    <MinusSquareOutlined key={`es${item.indent}`} style={{}} className=""
                        onClick={() => {
                            if(!!toggleExpandFunc)
                                toggleExpandFunc(schedulerData, item.slotId);
                        }}/>
                ) : (
                    <PlusSquareOutlined key={`es${item.indent}`} style={{}} className=""
                        onClick={() => {
                            if(!!toggleExpandFunc)
                                toggleExpandFunc(schedulerData, item.slotId);
                        }}/>
                );
            }
            indents.push(indent);

            let a = slotClickedFunc != undefined ? <span className="slot-cell">{indents}<a className="slot-text" style={{width: width}} onClick={() => {
                slotClickedFunc(schedulerData, item);
            }}>{item.slotName}</a></span>
                : <span className="slot-cell">{indents}<span className="slot-text header4-text overflow-text" style={{width: width - 80}}>{item.slotName}</span></span>;
            let slotItem = (
                <div style={{width: width}}>
                    <div className="overflow-text header2-text" style={{textAlign: "left", color: '#F08421', fontSize: '14px', marginBottom:'15px'}}>
                         {item.slotIssue ? item.slotIssue : ''}
                    </div>
                    <div className="overflow-text header2-text" style={{textAlign: "left", }}>
                    {a}
                    </div>
                     <div className="overflow-text header2-text" style={{textAlign: "left", marginTop: '15px'}}>
                         <span className=' overflow-text header3-text'>Assignee:</span> {item.slotAuthor ? item.slotAuthor : 'Unassignee'}
                    </div>
                </div>
                 
            );

            if(!!slotItemTemplateResolver) {
                let temp = slotItemTemplateResolver(schedulerData, item, slotClickedFunc, width, "overflow-text header2-text", toggleExpandFunc);
                if(!!temp)
                    slotItem = temp;
            }

            let tdStyle = { height: item.rowHeight-1, display: 'inline-block' };
            if(item.groupOnly) {
                tdStyle = {
                    ...tdStyle,
                    backgroundColor: schedulerData.config.groupOnlySlotColor,
                };
            }

            return (
                <tr key={item.slotId}>
                    <td data-resource-id={item.slotId} style={tdStyle}>
                        
                             {slotItem}

                    </td>
                </tr>
            );
        });

        return (
            <div style={{paddingBottom: paddingBottom}}>
                <table className="resource-table">
                    <tbody>
                        {resourceList}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ResourceView