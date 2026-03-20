@echo off
echo =======================================================
echo COPYING GRAPHIC DESIGNER TO DESKTOP/SAI
echo EXCLUDING node_modules, .next, .git
echo =======================================================
echo.
robocopy "%~dp0." "%~dp0..\SAI" /E /XD node_modules .next .git /R:3 /W:3
echo.
echo =======================================================
echo DONE! Created "SAI" folder on your Desktop without Node Modules!
echo =======================================================
pause
