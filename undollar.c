#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main (int argc, char *argv[]) {
    char run[1000] = "";

    int i;
    for (i = 1; i < argc; i++) {
        strcat(run, argv[i]);
        if (i < argc - 1) {
            strcat(run, " ");
        }
    }

    /* printf("length of run is %ld\n", strlen(run)); */
    /* printf("Running:\n%s\n", run); */

    if (strlen(run) > 1) {
        system(run);
    } else {
        printf("== undollar ==\n");
        printf("undollar strips the $ from the front of your commands\n");
        printf("For example, consider pasting into your console \"$ echo Hello World\"\n");
        printf("user@pc:~$ $ echo Hello World\n");
        printf("The result would simply be:\n");
        printf("Hello World\n");
    }

    return 0;
}
