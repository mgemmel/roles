import React from 'react'
import styles from './Sidebar.module.scss'
import Tree from '@material-ui/icons/AccountTree';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';


function Sidebar() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Rules Tree <Tree />
            </div>
            <div className={styles.divider} />
            <div className={styles.tree}>
                <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                >
                    <TreeItem nodeId="1" label="Applications">
                        <TreeItem nodeId="2" label="Calendar" />
                        <TreeItem nodeId="3" label="Chrome" />
                        <TreeItem nodeId="4" label="Webstorm" />
                    </TreeItem>
                    <TreeItem nodeId="5" label="Documents">
                        <TreeItem nodeId="10" label="OSS" />
                        <TreeItem nodeId="6" label="Material-UI">
                            <TreeItem nodeId="7" label="src">
                                <TreeItem nodeId="8" label="index.js" />
                                <TreeItem nodeId="9" label="tree-view.js" />
                            </TreeItem>
                        </TreeItem>
                    </TreeItem>
                </TreeView>
            </div>
        </div>
    )
}

export default Sidebar
