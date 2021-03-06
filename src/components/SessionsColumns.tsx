import * as React from "react";
import { IColumn } from "office-ui-fabric-react/lib/DetailsList";
import { Shimmer } from "office-ui-fabric-react/lib/Shimmer";

import ISortingInformation from "../common/utils/ISortingInformation";
import { ISession } from "../entries/Sessions";

export default class LinksColumns {
    public Columns(
        onColumnClick: any,
        sorting: ISortingInformation[],
        isLoading: boolean,
        discreteMode: boolean
    ): IColumn[] {

        const { DateTime } = require("luxon");

        let columns = [
            {
                key: `rowKey`,
                name: "Sessionize ID",
                fieldName: "rowKey",
                minWidth: 40,
                maxWidth: 100,
                isRowHeader: true,
                isResizable: true,
                sortAscendingAriaLabel: "Sorted A to Z",
                sortDescendingAriaLabel: "Sorted Z to A",
                data: "string",
                onColumnClick: (event: any, column: any) => {
                    onColumnClick(event, column);
                },
                onRender: (item: ISession) => {
                    return isLoading ? (
                        <Shimmer width={`${60 + Math.floor(Math.random() * 20)}%`} />
                    ) : (
                        <>{item.rowKey}</>
                    );
                },
                isPadded: true
            },
            {
                key: `speakers`,
                name: "Speaker(s)",
                fieldName: "speakers",
                minWidth: 40,
                maxWidth: 100,
                isRowHeader: true,
                isResizable: true,
                sortAscendingAriaLabel: "Sorted A to Z",
                sortDescendingAriaLabel: "Sorted Z to A",
                data: "string",
                onColumnClick: (event: any, column: any) => {
                    onColumnClick(event, column);
                },
                onRender: (item: ISession) => {
                    return isLoading ? (
                        <Shimmer width={`${60 + Math.floor(Math.random() * 20)}%`} />
                    ) : (
                        <>{item.speakers}</>
                    );
                },
                isPadded: true
            },
            {
                key: `title`,
                name: "Title",
                fieldName: "title",
                minWidth: 70,
                maxWidth: 160,
                isResizable: true,
                sortAscendingAriaLabel: "Sorted A to Z",
                sortDescendingAriaLabel: "Sorted Z to A",
                data: "string",
                onColumnClick: (event: any, column: any) => {
                    onColumnClick(event, column);
                },
                onRender: (item: ISession) => {
                    return isLoading ? (
                        <Shimmer width={`${50 + Math.floor(Math.random() * 10)}%`} />
                    ) : (
                        <>{item.title}</>
                    );
                },
                isPadded: true
            },            {
                key: `redirectTo`,
                name: "Redirect to",
                fieldName: "redirectTo",
                minWidth: 100,
                maxWidth: 200,
                isResizable: true,
                sortAscendingAriaLabel: "Sorted A to Z",
                sortDescendingAriaLabel: "Sorted Z to A",
                data: "string",
                onColumnClick: (event: any, column: any) => {
                    onColumnClick(event, column);
                },
                onRender: (item: ISession) => {
                    return isLoading ? (
                        <Shimmer width={`${50 + Math.floor(Math.random() * 10)}%`} />
                    ) : (
                        <>{item.redirectTo}</>
                    );
                },
                isPadded: true
            },
            {
                key: `startsAt`,
                name: "Start",
                fieldName: "startsAt",
                minWidth: 80,
                maxWidth: 100,
                isResizable: true,
                sortAscendingAriaLabel: "Sorted earliest to latest",
                sortDescendingAriaLabel: "Sorted latest to earliest",
                isCollapsible: true,
                data: "string",
                onColumnClick: (event: any, column: any) => {
                    onColumnClick(event, column);
                },
                onRender: (item: ISession) => {
                    return isLoading ? 
                        <Shimmer width={`${70 + Math.floor(Math.random() * 10)}%`} /> 
                        : 
                        <>{DateTime.fromISO(item.startsAt).toLocaleString(DateTime.DATETIME_MED)}</>;
                },
                isPadded: true
            },
            {
                key: `endsAt`,
                name: "End",
                fieldName: "endsAt",
                minWidth: 80,
                maxWidth: 100,
                isResizable: true,
                sortAscendingAriaLabel: "Sorted earliest to latest",
                sortDescendingAriaLabel: "Sorted latest to earliest",
                isCollapsible: true,
                data: "string",
                onColumnClick: (event: any, column: any) => {
                    onColumnClick(event, column);
                },
                onRender: (item: ISession) => {
                    return isLoading ? 
                        <Shimmer width={`${70 + Math.floor(Math.random() * 10)}%`} /> 
                        : 
                        <>{DateTime.fromISO(item.endsAt).toLocaleString(DateTime.DATETIME_MED)}</>;
                },
                isPadded: true
            },            
            {
                key: `calendarClickCount`,
                name: "Calendar",
                fieldName: "calendarClickCount",
                minWidth: 40,
                maxWidth: 60,
                isResizable: true,
                sortAscendingAriaLabel: "Sorted lowest to highest",
                sortDescendingAriaLabel: "Sorted highest to lowest",
                isCollapsible: true,
                data: "number",
                onColumnClick: (event: any, column: any) => {
                    onColumnClick(event, column);
                },
                onRender: (item: ISession) => {
                    return isLoading ? <Shimmer width={`${70 + Math.floor(Math.random() * 10)}%`} /> : discreteMode ? <span className={`discreteMode`}></span> : <>{item.calendarClickCount}</>;
                },
                isPadded: true,
                hidden: discreteMode
            },
            {
                key: `clickCount`,
                name: "Clicks",
                fieldName: "clickCount",
                minWidth: 40,
                maxWidth: 60,
                isResizable: true,
                sortAscendingAriaLabel: "Sorted lowest to highest",
                sortDescendingAriaLabel: "Sorted highest to lowest",
                isCollapsible: true,
                data: "number",
                onColumnClick: (event: any, column: any) => {
                    onColumnClick(event, column);
                },
                onRender: (item: ISession) => {
                    return isLoading ? <Shimmer width={`${70 + Math.floor(Math.random() * 10)}%`} /> : discreteMode ? <span className={`discreteMode`}></span> : <>{item.clickCount}</>;
                },
                isPadded: true
            },
            {
                key: `videoClickCount`,
                name: "Video",
                fieldName: "videoClickCount",
                minWidth: 40,
                maxWidth: 60,
                isResizable: true,
                sortAscendingAriaLabel: "Sorted lowest to highest",
                sortDescendingAriaLabel: "Sorted highest to lowest",
                isCollapsible: true,
                data: "number",
                onColumnClick: (event: any, column: any) => {
                    onColumnClick(event, column);
                },
                onRender: (item: ISession) => {
                    return isLoading ? <Shimmer width={`${70 + Math.floor(Math.random() * 10)}%`} /> : discreteMode ? <span className={`discreteMode`}></span> : <>{item.videoClickCount}</>;
                },
                isPadded: true
            }

        ];

        return columns.map(column => {
            const sortField = sorting.filter(sort => {
                return sort.fieldName === column.fieldName;
            });
            if (sortField.length > 0) {
                return { ...column, ...sortField[0] };
            } else {
                return { ...column };
            }
        });
    }
}
