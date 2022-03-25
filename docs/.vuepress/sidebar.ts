import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig([
  "",
  "project",
  { text: "知识要点", icon: "edit", collapsable: true, prefix: "IT/", children:
    [ "", "FTP", "SFTP", "git" ] },
    
  { text: "捣鼓折腾", icon: "operate", collapsable: true, prefix: "operate/", children:
    [ "", "padavan", "openwrt", "flippy_openWRT", "N1_armbian", "N1_logo_PARTITION", "bky_P1", "XY_C1C5", "XY_C1C5_sj", "AC_RM2100", "Q5", "MSG1500", "vuepress_blog", "mkbootimg", "squashfs" ] },
    
  { text: "Linux", icon: "linux", collapsable: true, prefix: "project/Linux/", children:
    [ { text: "Linux基础知识", icon: "blog", collapsable: true, prefix: "Linux_basic/", children: 
        ["", "01.linux_atten", "02.linux_dir", "03.linux_basic" ,"04.linux_authority", "05.linux_help", "06.linux_search", "07.linux_compress", "08.linux_shutdown_reboot", "09.linux_net", "10.linux_text_edit", "11.linux_soft_install", "12.linux_user_group", "13.linux_other_auth", "14.linux_filesystem_manage" ] },
      { text: "Linux系统管理", icon: "blog", collapsable: true, prefix: "Linux_manage/", children: 
        ["", "01.linux_boot", "02.linux_service", "03.linux_process", "04.linux_work", "05.linux_log", "06.LAMP_LNMP_evn", "07.linux_backup_recover", "08.SELinux"] },
      { text: "Linux大杂烩", icon: "blog", collapsable: true, prefix: "Linux_mix/", children: 
        ["", "Linux_sed_grep_awk" ] },
      { text: "Shell脚本笔记", icon: "shell", collapsable: true, prefix: "Shell/", children: 
        ["", "01.Shell_intro", "02.Shell_grammar", "03.Shell_format_out", "04.Shell_format_in", "05.Shell_var", "06.Shell_array", "07.Shell_operation", "08.Shell_if", "09.Shell_for", "10.Shell_while", "11.Shell_until", "12.Shell_case", "13.Shell_function", "14.Shell_regular", "15.Shell_grep", "16.Shell_sed", "17.Shell_awk", "18.Shell_monitor_script", "19.Shell_lamp_install_script"] },
    ], },
    
  { text: "Docker笔记", icon: "hot", collapsable: true, prefix: "project/Docker/", children:
    ["", "01.docker", "02.docker", "03.docker", "04.docker", "05.docker", "06.docker", "07.docker", "08.docker"] },
    
  { text: "Git笔记", icon: "git", collapsable: true, prefix: "project/Git/", children:
    ["", "01.Git_install", "02.Git_config", "03.Git_workfllow", "04.Git_work_stage_git", "05.Git_init_repo", "06.Git_basic_opera" ,"07.Git_branch_manage", "08.Git_log", "09.Git_tag", "10.Git_remote", "11.Git_server"] },
    
  { text: "Excel修炼秘籍", icon: "table", collapsable: true, prefix: "project/Excel/", children:
    ["", "01.Excel_hotkey", "02.Excel_function", "03.VBA_Range", "04.VBA_Sheet", "05.VBA_Workbook", "06.VBA_Shape_Chart", "07.VBA_Application", "08.VBA_dialog", "09.VBA_menu_toolbar", "10.VBA_controls_form_1", "11.VBA_controls_form_2" , "12.VBA_controls_form_3", "13.VBA_function", "14.VBA_fso"] },
  
]);
