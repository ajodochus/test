export class TngVersioningPageObjects {
    protected static HEADLINE_TEXT = '.p-panel-title';
    protected static BUTTON_NEW_FOLDER = "//button[text()='+Create']";
    protected static TEXTAREA_DESCRIPTION = "//textarea[1]";
    protected static ARROW_AT_TEXT = "//span[@class='p-treenode-label']/../button";
    protected static FOLDER_H4_TEXT = "//div[@class='p-panel-content']/h4";
    //protected static TABVIEW_PROJECT_NAME = "//div[@class='tabview']/h2";
    protected static TABVIEW_PROJECT_NAME = "data-testid=tid_project_name";
    protected static FOLDER_CREATE_BUTTON = "data-testid=tid_folder_create_btn";
    protected static FOLDER_RENAME_BUTTON = "data-testid=tid_folder_rename_btn";
    protected static FOLDER_DELETE_BUTTON = "data-testid=tid_folder_delete_btn";

    // header
    protected static BUTTON_USER_ICON = "//span[@class='p-button-icon p-c pi pi-user']";
    protected static BUTTON_PROFILE = "text=Profile";
    protected static BUTTON_LOGOUT = "text=Log out";

}